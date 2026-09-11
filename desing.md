# Design System — TarotPage

## Overview
Astro + React islands. Bilingual (es/en). Cosmic theme: Clow Cards. No-scroll desktop viewport (`100vh`), card invades hero.

## Colors
- `--color-gold`: `#d4a853` (212,168,83) — primary accent, sun/moon, borders, gold buttons
- `--color-gold-dark`: `#c49a4a` / `#b08a3e` — hover
- `--color-purple`: `#6a3a7a` — light radial
- `--color-purple-dark`: `#3a1a4a`
- `--color-purple-deep`: `#2a1035`
- `--color-bg`: `#1a1a1a` / `#1a0a00` dark
- `--color-surface`: surface cards
- `--color-text`: `#f5f0e8` off-white
- Moon black: `#000`

## Typography
- `--font-serif`: titles (Cartas Clow, Card names, Experience italic rotated -15deg)
- `--font-sans`: UI, buttons, subtitles (uppercase 0.08em tracking)
- Sizes: title 0.95-1.08rem, subtitle 0.68rem, desc 0.74rem, experience 1.35rem, buttons 0.74rem

## Layout
- `Layout.astro`: CSS vars, global reset
- `Header.astro`: fixed, gradient `rgba(26,26,26,0.95)` to transparent, blur 8px, nav-link gold underline on hover
- `main-content`: `display:flex; flex-direction:column; height:100vh; padding:45px 0 1.5rem 0; box-sizing:border-box; overflow:visible`
- `hero-area`: `flex-shrink:0`
- `HeroSection`: `padding:1.75rem 3rem 0.15rem; min/max-height:5vh; overflow:visible`; celestial-symbol 80px (sun 45px + moon 25px)
- `main-grid`: `grid 1fr 1fr; grid-template-rows:minmax(0,1fr); flex:1; min-height:0; overflow:visible; margin-bottom:1rem; padding:0 2rem`
- `grid-col-1`: `flex column; border-right 1px rgba(212,168,83,0.15); min-height:0; overflow:visible`
- `grid-col-2`: `flex row; min-height:0` (no overflow hidden to allow card translateY)
- `cotd-wrapper` / `moon-wrapper`: flex 1
- `DailyCardImage`: `card-wrapper width 240px; transform:translateY(-50px); perspective 1000px; rotate -3deg;` glow border `borderGlow 3s`

## Components

### ReadingsColumns (grid-col-1)
- Container: `readings-columns flex gap:1rem; justify-content:center; height:100%`
- Column: `flex:1 1 0; max-width:200px; min-width:120px; min-height:0; border-radius:120px 120px 6px 6px; overflow:hidden`
- Arch: absolute top 0 height 45px gradient gold 0.15→0, border-radius 100px

#### Column 1 — Libro Clow
- `column-reading`: `padding:0; background:var(--color-surface); border 1px rgba(212,168,83,0.15)`
- `column-image`: `position:absolute; inset:0; border-radius:120px 120px 6px 6px`
- After overlay: `linear-gradient(180deg, rgba(212,168,83,0.12) 0%, rgba(60,30,10,0.20) 100%)`
- `img`: `object-fit:cover; object-position:center center; filter: sepia(0.45) saturate(1.25) hue-rotate(-6deg) brightness(0.88) contrast(1.08) opacity(0.78)` hover `sepia 0.30 / 0.96`
- Button: `position:absolute; bottom:0.6rem; left:0; right:0; margin:0 auto; width:132px; padding:0.42rem 0.5rem; font-size:0.74rem; background:linear-gradient(180deg, rgba(106,58,122,0.88) 0%, rgba(58,26,74,0.92) 100%); backdrop-filter:blur(4px); border-color:rgba(212,168,83,0.45); color:var(--color-gold); border-radius:8px; box-shadow:0 4px 16px rgba(0,0,0,0.45)`

#### Column 2 — Lectura Profesional
- `column-crystal`: radial purples + `linear-gradient(180deg, #3a1a4a 0%, #2a1035 100%); justify-content:flex-start; gap:0.15rem; padding:0.85rem 0.5rem 2.6rem; border:1px rgba(212,168,83,0.4)`
- `::before` extra radial overlay
- `column-title`: 1.08rem serif gold 600
- `crystal-subtitle`: 0.68rem sans uppercase 0.08em opacity 0.8
- `crystal-desc`: 0.74rem sans line-height 1.5 opacity 0.92 max-width 92% — i18n `crystalDesc` + `crystalSubtitle`
- `crystal-experience`: `flex:1; flex-direction:column; gap:0.9rem; margin-top:0.25rem; align-items:center`
- `experience-text`: 1.35rem serif italic rotate -15deg opacity 0.9
- `eclipse-icon`: 96px, `drop-shadow(0 0 8px rgba(212,168,83,0.35))`; SVG sun `r9` at 18.5,20 fill #d4a853, rays equidistant `r13` start → `r17` end (8 rays cardinal+diagonal corrected), outer ring `r13` stroke 0.8 opacity 0.25, moon `r8.2` at 23.5,20 fill #000, light glow `r11.5` fill #d4a853 opacity 0.14
- Animations: `.eclipse-gold {animation:goldBlink 2.4s ease-in-out infinite}` `.eclipse-rays delay 0.4s` `.eclipse-light {animation:lightBlink 2s ease-in-out infinite; transform-origin:18.5px 20px}` `@keyframes goldBlink 0.82→1 + brightness 1.08` `@keyframes lightBlink 0.10 scale 0.92 → 0.26 scale 1.08`
- Button `crystal-btn`: same position/size as other (132px, 0.74rem, 8px radius) but `background:linear-gradient(180deg, rgba(212,168,83,0.96) 0%, rgba(176,138,62,0.98) 100%); color:#3a1a4a; border-color:rgba(106,58,122,0.55); backdrop-filter:blur(4px)` hover `rgba(224,180,92,0.98)→rgba(188,148,68,1)` color #2a1035

### CardOfTheDay
- Shared logic `src/lib/cardOfTheDay.ts` `getTodayCard(locale)` dayOfYear % 53
- Island `CardOfTheDayIsland.tsx` modes `text|image|image-label` client:load
- Crystal column date removed; original date/cardName kept as props default for legacy

### i18n
- `src/i18n/translations.ts`: `readings.getReading`, `crystalReadings` ("Lectura Profesional"/"Professional Reading"), `crystalSubtitle`, `crystalDesc`, `registerNow` ("Reserva Ahora"/"Book Now"), `experience`
- `src/pages/[...lang]/index.astro` passes `crystalSubtitle` + `crystalDesc`

### Assets
- `src/assets/magicBook.webp` — reading column image (imported as `cardsClow`)
- `src/assets/magic_hand.png` — unused (proposed but rejected)
- `src/assets/cards_clow.jpg` — previous, replaced
- `public/assets/cards/*.webp` — 53 Clow cards 1830x4096

## Responsive
- 1200px: column radius 100px, padding reduced, experience 0.95rem
- 768px: `main-grid 1fr`, `main-content height:auto min-height:100vh`, columns `min-width:130px flex 0 0 130px`, scroll-snap, eclipse same
- 480px: columns 110px, radius 80px, experience 0.85rem

## Build
- `astro dev --background` / `astro dev stop|status|logs`
- `npm run build` → `.vercel/output` via `@astrojs/vercel`
