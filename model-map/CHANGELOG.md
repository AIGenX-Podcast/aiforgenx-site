# The Model Map · version history

Live page: https://www.aiforgenxpodcast.com/model-map/
Source: `model-map/index.html` (one file, no build step; the data lives in the `MODELS`, `WATCHLIST`, and `CHANGELOG` arrays at the bottom of the script).

Each entry below is what the board looked like on that date, so any older commit can be read in context. Method every time: prices, engine names, and plan mappings checked against the companies' own pricing and release pages on the snapshot date. Artificial Analysis is cited only for comparative quality reads, as theirs.

---

## v3 · September 10, 2026

**Headline: the flagships turned into agents.**

The frame this snapshot is written around: ChatGPT's new engine, GPT-6 Astra, is the first flagship in a consumer chatbot built to *do jobs* rather than answer questions (run your computer, fill in forms, hand back a finished doc, deck, or spreadsheet). The Claude and Gemini rows are re-described in the same functional terms so a reader can tell what each engine is actually for.

Board as of this snapshot:

| Car | Flagship engine | Everyday engine | Notes |
|---|---|---|---|
| ChatGPT | GPT-6 Astra (Sept 4) | GPT-5.6 Luna | Astra on Plus and up; Astra Pro on Pro, shown as "GPT-6 Pro" |
| Claude | Fable 5.1 (Sept 1) | Sonnet 5 | Fable on Pro and up, capped at half of weekly limit |
| Gemini | 3.1 Pro (3.5 Pro still "coming soon") | 3.6 Flash | 3.8 Flash (Sept 2) and 3.7 Flash on AI Pro and Ultra only |
| Grok | 4.6 | 4.6 | 4.7 promised mid-September, not shipped |
| Copilot | routes to GPT-5.6 family | same | Astra in business Copilot only |
| Perplexity | Sonar 2 + 9 guest engines | Sonar 2 | Astra and Fable 5.1 in Computer mode |
| Llama / Meta | Muse Spark 1.3 (closed) | Llama 4 (open) | Llama line unchanged since 2025 |
| Kimi | K3 | K2.6 | unchanged |
| DeepSeek | V4-Pro | V4-Flash | unchanged |
| Qwen | Qwen3.8-Max (open) | Qwen3.8 family | unchanged |
| GLM (Z.ai) | GLM-5.3 | GLM-5.3-Flash | unchanged |
| Vibe (Mistral) | Large 3 | Medium 3.5 | unchanged |

What changed in the file:

- ChatGPT row rebuilt around Astra: new "best at" (doing tasks for you), new test-drive copy, plan ladder marks which tiers do and do not get Astra, decoder gains Astra and Astra Pro and re-describes Sol as last month's flagship. Token price line now leads with Astra ($10 / $50).
- Claude row: Fable 5 to Fable 5.1, with the functional description (hours-long coding and research jobs, finished documents, fewer refusals). "Best at" now says long jobs.
- Gemini row: 3.8 Flash and 3.7 Flash added to the decoder; note that the Pro-class flagship is still unshipped.
- Perplexity row: guest engine list updated to Perplexity's September 4 table; new Computer mode line.
- Meta row: Muse Spark 1.2 to 1.3.
- Copilot and Grok rows: one-line notes on Astra (business only) and Grok 4.7 (not shipped).
- Watchlist: Nemotron status updated (now in Perplexity's picker, still no app).
- Change log: September 10 entry added; September 1 entry kept beneath it.
- Intro engine examples changed from "Sol, Fable, Flash" to "Astra, Fable, Flash".

Strength reads used for the copy (independent, Artificial Analysis and OpenAI's own comparison table): Astra leads on computer use, terminal and agent tasks, long-context retrieval, and math; Fable 5.1 leads or ties on the general intelligence index and on Humanity's Last Exam; Astra hallucinates roughly half as often as Sol; Astra completes about 72% of OSWorld computer-use tasks (roughly one in four fails).

Sources (fetched September 10, 2026): chatgpt.com/pricing, openai.com/index/gpt-6-astra, deploymentsafety.openai.com/gpt-6-astra, claude.com/pricing, anthropic.com/claude-fable-and-mythos-5-1, blog.google (3.7 Flash, 3.8 Flash), one.google.com/about/google-ai-plans, perplexity.ai help center (models by plan, Sept 4 table), artificialanalysis.ai (Astra benchmark article), Microsoft/SD Times (Astra in Copilot Cowork and Studio), Bloomberg and codersera (Muse Spark 1.3), NextBigFuture and atoms.dev (Grok 4.7 status).

---

## v2 · September 1, 2026

Commits: `2ed9d4c` (pricing refresh), `e5b1f8c` (watchlist and change log added), `0fc4000` (Z.ai GLM promoted to a full row).

**Headline: pricing refresh, plus the page learned to remember.**

This is the version that added the two maintained sections below the table: the dated "what changed" log and the watchlist for engines with no consumer product yet. Both became data arrays so later passes are an edit, not a rebuild.

Board as of this snapshot:

| Car | Flagship engine | Everyday engine | Notes |
|---|---|---|---|
| ChatGPT | GPT-5.6 Sol | GPT-5.6 Luna | Free tier upgraded to Luna with unlimited text chat |
| Claude | Fable 5 | Sonnet 5 | Opus 4.8 to Opus 5; Sonnet price rise cancelled, stays $2 / $10 |
| Gemini | 3.1 Pro | 3.6 Flash | |
| Grok | 4.6 | 4.6 | xAI renamed SpaceXAI; SuperGrok Plus $100 confirmed |
| Copilot | routes to GPT-5.6 family | same | |
| Perplexity | Sonar 2 + guests | Sonar 2 | Terra, Sonnet 5, Gemini 3.1 Pro, Grok 4.5, Kimi K3 |
| Llama / Meta | Muse Spark 1.2 (closed) | Llama 4 (open) | |
| Kimi | K3 (new, 3x the price of K2.6) | K2.6 | |
| DeepSeek | V4-Pro | V4-Flash | rates raised across the board |
| Qwen | Qwen3.8-Max (newly open) | Qwen3.8 family | |
| GLM (Z.ai) | GLM-5.3 (Aug 18, open) | GLM-5.3-Flash | new twelfth row |
| Vibe (Mistral) | Large 3 (about 4x cheaper) | Medium 3.5 (newly open) | Le Chat renamed Vibe |

Watchlist at this snapshot: NVIDIA Nemotron.

---

## v1 · July 13, 2026

Commit: `243e912` (added to the AI Lab alongside Ask Darlene).

**Headline: the first laminated decoder ring.**

Companion to the "You Don't Have to Keep Up" article. Established the car-and-engine metaphor, the five filter chips (Everyday, Writing, Coding, Research, Open models), the expandable rows with test drive, price ladder, engine decoder, and nerd layer, and the baked-in favicons. Eleven rows. No change log or watchlist yet. Verification brief by Jim, 2026-07-13, lives in the team folder.

Board as of this snapshot:

| Car | Flagship engine | Everyday engine | Notes |
|---|---|---|---|
| ChatGPT | GPT-5.6 Sol (July 9) | GPT-5.5 Instant | Luna and Terra were Plus and up; GPT-Live voice |
| Claude | Fable 5 (promo window) | Sonnet 5 | Opus 4.8 was the deep engine |
| Gemini | 3.1 Pro | 3.5 Flash | Deep Think + Spark, Ultra only |
| Grok | 4.5 | Grok 4 Fast | company still called xAI |
| Copilot | routes to GPT-5 family | same | Copilot Pro discontinued, M365 bundles instead |
| Perplexity | Sonar + guests | Sonar | GPT-5.2, Sonnet 4.6, Gemini 3.1 Pro, Grok 4 |
| Llama / Meta | Muse Spark 1.1 (closed) | Llama 4 (open) | |
| Kimi | K2.6 | K2.6 | K2.7-Code coding specialist |
| DeepSeek | V4-Pro | V4-Flash | |
| Qwen | Qwen3.7 Max (closed) | Qwen3.5 family (open) | |
| Le Chat (Mistral) | Large 3 (open) | Medium 3.5 (closed at the time) | |

---

## How to cut the next version

1. Check every price, engine name, and plan mapping against the companies' own pages. Do not trust aggregators for numbers.
2. Edit the `MODELS` array. Update `honest`, `ladder`, `decoder`, `tokens`, and `best` so each engine reads as *what it is for*, not just its name.
3. Add a new entry to the top of `CHANGELOG` in the file. Keep it to what a reader would actually feel.
4. Promote or retire `WATCHLIST` entries. A model earns a row when there is a product a normal person can open.
5. Bump the `asof` date stamp in the header and the comment above `MODELS`.
6. Add a section here, with the board table, so the commit has context.
