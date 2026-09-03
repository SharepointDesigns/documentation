---
name: run-spd-documentation
description: Run, build, start, serve, screenshot, or verify the SPD Docusaurus documentation site. Use when asked to launch the docs site, preview changes, take a screenshot, or confirm a page is rendering correctly.
---

# run-spd-documentation

Docusaurus 3 documentation site located at `spd-documentation/`. Driven via a local dev server + `curl` for smoke checks, or `chromium-cli` for screenshots. No custom driver — both tools work off-the-shelf.

All commands below are run from inside `spd-documentation/`.

---

## Prerequisites

Node ≥ 18 required (verified on v22.17.1). Dependencies must be installed:

```bash
cd spd-documentation
npm install
```

---

## Run — agent path (headless smoke check)

Start the dev server on a free port, verify it responds, then stop it:

```bash
cd spd-documentation
npm run start -- --port 3099 --no-open &
sleep 8
curl -s -o /dev/null -w "%{http_code}" http://localhost:3099
# expect: 200

# When done:
kill $(lsof -ti :3099)
```

To fetch and inspect a specific page:

```bash
curl -s http://localhost:3099/docs/intro | grep -o '<title>[^<]*</title>'
# expect: <title>SharePoint Designs Documentation</title>
```

---

## Run — screenshot with chromium-cli

```bash
cd spd-documentation
npm run start -- --port 3099 --no-open &
sleep 8

chromium-cli screenshot http://localhost:3099 --output /tmp/spd-home.png
chromium-cli screenshot http://localhost:3099/docs/intro --output /tmp/spd-intro.png

kill $(lsof -ti :3099)
```

Screenshots land in `/tmp/`. Read them with the Read tool to visually verify rendering.

---

## Run — human path

```bash
cd spd-documentation
npm start
# Opens http://localhost:3000 in the default browser. Ctrl-C to stop.
```

Useless headless — use the agent path above instead.

---

## Build (static output)

```bash
cd spd-documentation
npm run build
# Output: spd-documentation/build/
```

Serve the static build locally:

```bash
npm run serve -- --port 3099
curl -s -o /dev/null -w "%{http_code}" http://localhost:3099
```

---

## Gotchas

- **Duplicate routes warning at startup** — the site emits:
  ```
  Duplicate routes found!
  - /docs/category/employee-onboarding
  - /docs/category/get-started
  ```
  This is a known issue from category pages with overlapping slugs. The site still compiles and serves correctly. Do not treat this as a blocking error.

- **`--no-open` is required in headless/agent contexts** — without it `npm start` tries to open a browser and hangs or errors in a headless environment.

- **Port 3000 is often already in use** — always pass `--port <free-port>` when running programmatically to avoid conflicts.

- **`npm run start` does not exit on its own** — it runs until killed. Always background it with `&` and kill it explicitly when done.
