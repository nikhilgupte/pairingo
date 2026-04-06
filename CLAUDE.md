# Pairingo — Claude Context

## What this is
Pairingo is a multiplayer memory card-matching game. Players flip cards to find pairs; matching earns a point and keeps your turn. 1–4 players, local (hot-seat) or online via WebSockets.

## Stack
- **Frontend:** Vanilla JS (`app.js`), HTML (`index.html`), CSS (`styles.css`)
- **Backend:** Node.js + Express + `ws` WebSockets (`server.js`)
- **PWA:** Service worker (`sw.js`), `manifest.json`
- **Deploy:** Render.com (`render.yaml`), free tier, auto-deploy from main

## Running locally
```
npm start          # starts server on http://localhost:3000
```

## Architecture

### Server (`server.js`)
- Maintains a `rooms` Map; each room holds deck state, players, scores, and timers
- RNG: seeded Mulberry32 PRNG — same seed → same deck order on all clients
- WebSocket message types: `create-room`, `join-room`, `select-card`, `restart-game`, `update-timer`, `set-edition`
- Server is authoritative: all state changes go through server → broadcast to room
- Host permissions: only host can restart, change timer, change edition

### Client (`app.js`)
- Single-file vanilla JS; no build step
- Connects to WebSocket at runtime; handles local (no WS) and remote modes
- Local mode: all logic runs client-side; no server room created until "Invite Players"
- Dynamic icon rendering: emojis drawn on `<canvas>`, image-based icons via `<img>`

### Card Editions
| Edition | Icons | Source |
|---|---|---|
| Classic | Emoji drawn on canvas | `OBJECT_TYPES` array (100+ options, 18 selected per game) |
| Flags 🌍 | Emoji + SVG images | `FLAG_ICONS` — country emoji + Canadian provincial SVGs in `flags/` |
| Bugs 🐛 | Emoji | `CREEPY_CRAWLIES_ICONS` |
| Dinos 🦕 | JPEG/PNG images | `DINO_ICONS` — Nobu Tamura illustrations in `dinos/` |

### Game constants
- `TOTAL_PAIRS = 18` — both client and server must match
- Timer: 8s → 3s scaling as pairs are found: `max(3, 8 − (pairsFound/18) × 5)`
- Card reveal timeout before advancing turn: 900ms

## Key behaviors / spec rules
- Timer starts on **first card flip** of a turn, not at turn start
- On timeout (multiplayer): server force-advances to next player
- Invite link contains only `?room=XXX` — never debug params like `?cheat=on`
- Cheat mode (`?cheat=on`): shows all cards face-up, for testing only
- Scoreboard always visible even when controls are collapsed
- Edition changes reset the entire game (new deck, scores zeroed)

## File map
```
app.js          — all client-side game logic
server.js       — WebSocket server, room management
index.html      — shell HTML, all UI markup
styles.css      — all styling
sw.js           — service worker (PWA cache)
manifest.json   — PWA manifest
flags/          — SVG flag images (Canadian provinces/cities)
dinos/          — Dinosaur illustration images (JPEG/PNG)
spec.md         — authoritative product spec
ICONS.md        — icon reference and alternatives
render.yaml     — Render.com deployment config
```
