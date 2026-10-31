// Supper & Sips RSVP function. One private Vercel Blob per RSVP under salon-no1/.
// Public:  GET (seats left), POST (RSVP).
// Admin:   GET ?admin=1, PATCH, DELETE, all with an x-admin-key header matching SALON_ADMIN_KEY.
import { put, list, get, del } from '@vercel/blob';
import { randomUUID, timingSafeEqual } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const SEATS = 10;
const PREFIX = 'salon-no1/';

// Off Vercel with no Blob token (a plain local preview), keep RSVPs in a temp file instead.
const LOCAL = !process.env.VERCEL && !process.env.BLOB_READ_WRITE_TOKEN;
const LOCAL_FILE = join(tmpdir(), 'salon-no1-rsvps.json');

async function localAll() {
  try { return JSON.parse(await readFile(LOCAL_FILE, 'utf8')); } catch { return {}; }
}

async function readAll() {
  if (LOCAL) return Object.values(await localAll());
  const blobs = [];
  let cursor;
  do {
    const page = await list({ prefix: PREFIX, cursor });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  const rows = await Promise.all(blobs.map(async (b) => {
    const res = await get(b.pathname, { access: 'private', useCache: false });
    return res && res.stream ? JSON.parse(await new Response(res.stream).text()) : null;
  }));
  return rows.filter(Boolean);
}

async function save(rec) {
  if (LOCAL) {
    const all = await localAll();
    all[rec.id] = rec;
    return writeFile(LOCAL_FILE, JSON.stringify(all, null, 2));
  }
  await put(`${PREFIX}${rec.id}.json`, JSON.stringify(rec), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 60,
  });
}

async function remove(id) {
  if (LOCAL) {
    const all = await localAll();
    delete all[id];
    return writeFile(LOCAL_FILE, JSON.stringify(all, null, 2));
  }
  await del(`${PREFIX}${id}.json`);
}

const json = (body, status = 200) => Response.json(body, { status, headers: { 'cache-control': 'no-store' } });
const seatsTaken = (rows) => rows.filter((r) => !r.waitlist).length;
const clean = (v, max) => String(v ?? '').trim().slice(0, max);

function isAdmin(request) {
  const want = process.env.SALON_ADMIN_KEY || '';
  const got = request.headers.get('x-admin-key') || '';
  if (!want || got.length !== want.length) return false;
  return timingSafeEqual(Buffer.from(got), Buffer.from(want));
}

export async function GET(request) {
  const rows = await readAll();
  if (new URL(request.url).searchParams.has('admin')) {
    if (!isAdmin(request)) return json({ error: 'unauthorized' }, 401);
    rows.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    return json({ seats: SEATS, rsvps: rows });
  }
  return json({ seats: SEATS, left: Math.max(0, SEATS - seatsTaken(rows)) });
}

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return json({ error: 'Bad request' }, 400); }
  if (body.website) return json({ status: 'confirmed', name: '' }); // honeypot: bots fill the hidden field

  const name = clean(body.name, 80);
  const email = clean(body.email, 120).toLowerCase();
  const phone = clean(body.phone, 30);
  const diet = clean(body.diet, 300);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.replace(/\D/g, '').length < 10) {
    return json({ error: 'Please add your name, email, and a phone number I can text.' }, 400);
  }

  const rows = await readAll();
  const first = name.split(/\s+/)[0];
  // Same email twice keeps the original spot instead of taking a second seat.
  const existing = rows.find((r) => r.email === email);
  if (existing) return json({ status: existing.waitlist ? 'waitlist' : 'confirmed', name: first });

  const waitlist = seatsTaken(rows) >= SEATS;
  await save({ id: randomUUID(), name, email, phone, diet, waitlist, paid: false, createdAt: new Date().toISOString() });
  return json({ status: waitlist ? 'waitlist' : 'confirmed', name: first });
}

export async function PATCH(request) {
  if (!isAdmin(request)) return json({ error: 'unauthorized' }, 401);
  const { id, paid, waitlist } = await request.json().catch(() => ({}));
  const rows = await readAll();
  const rec = rows.find((r) => r.id === id);
  if (!rec) return json({ error: 'not found' }, 404);
  if (typeof paid === 'boolean') rec.paid = paid;
  if (waitlist === false && rec.waitlist) {
    if (seatsTaken(rows) >= SEATS) return json({ error: 'All 10 seats are taken.' }, 409);
    rec.waitlist = false;
  }
  await save(rec);
  return json({ ok: true, rsvp: rec });
}

export async function DELETE(request) {
  if (!isAdmin(request)) return json({ error: 'unauthorized' }, 401);
  const id = new URL(request.url).searchParams.get('id');
  if (!id || !/^[\w-]+$/.test(id)) return json({ error: 'missing id' }, 400);
  await remove(id);
  return json({ ok: true });
}
