# Africa IT Solutions — design system and page brief

Read this whole file before writing any page. It is the contract every page follows.

## The brief

- **Who:** Africa IT Solutions, an Authorised Starlink Retailer and IT company in Maputo, Mozambique.
- **Audience:** Mozambican businesses, lodges, farms, NGOs and households. Most read Portuguese first, many on phones on slow connections.
- **The site's job:** get people to request Starlink or an IT quote (WhatsApp, phone, contact form). Everything serves that.
- **Voice:** plain, confident, specific, warm. Short sentences. Say what we do and for whom. No hype ("revolutionary", "cutting-edge", "seamless", "unlock"), no filler.

## Language

- Portuguese is the default and primary language. Write **European/Mozambican Portuguese** (pt-MZ): "contacto", "equipa", "telemóvel", "registo", "facto", "acção" is NOT used (use post-1990 spelling "ação"). Use "você"-neutral phrasing; prefer impersonal/infinitive constructions ("Peça um orçamento", "Fale connosco").
- Every user-visible string lives in a `copy = { pt: {...}, en: {...} }` object at the top of the page file and is read with `const t = useCopy(copy)`. **No hard-coded visible text in JSX** (alt text and aria-labels included).
- The PT version is written natively, not translated word-for-word. The EN version must say the same things.
- Call `useSeo({ pt: { title, description }, en: { title, description } })` at the top of the page component. Titles ≤ 60 chars, descriptions 120–160 chars.
- Internal links: `const to = useTo()` then `to('contact')`, `to('services', 'starlink')`. Never write raw paths like `/contact`.
- Contact details come only from `COMPANY` in `src/content/company.ts`. Use `COMPANY.address[lang]` / `COMPANY.hours[lang]` with `const lang = useLang()`.

## Tokens (defined in `src/index.css`, use the Tailwind classes)

| Token | Class | Use |
|---|---|---|
| ink `#0f1e33` | `bg-ink`, `text-ink` | dark surfaces, headings on light |
| ink-2 `#16294a` | `bg-ink-2` | raised panels on ink |
| sea `#1d4f7a` | `bg-sea` | rare secondary blue |
| paper `#f4f6f9` | `bg-paper` | default page background |
| white | `bg-white` | alternate light sections, form fields |
| slate `#4a5668` | `text-slate` | body text on light (default) |
| mist `#c9d2de` | `text-mist`, `ring-mist`, `border-mist` | hairlines; body text on ink |
| fog `#e3e8ef` | `bg-fog`, `ring-fog` | subtle fills/borders on light |
| jacaranda `#6b4fd8` | `text-jacaranda`, `bg-jacaranda` | THE accent: primary buttons, links, focus. Use sparingly |
| jacaranda-light `#a996f2` | `text-jacaranda-light` | accent on ink |
| signal `#2fb67c` | | success/"online" only |
| alert `#d8452f` | | errors only |

Jacaranda is the accent because the jacaranda trees are Maputo's signature. It must stay rare: one primary button per view, links, small markers. Never as a section background, never as gradient wash.

**Type:** `font-display` = Bricolage Grotesque (headings, numbers, emphasis), `font-sans` = Instrument Sans (body). Type role classes: `t-display` (home hero only), `t-h1` (page title), `t-h2` (section title), `t-h3` (item title), `t-lede` (intro paragraph). Body is 17px. Keep running text inside `measure` (~70ch).

**Surfaces:** wrap dark sections in `className="on-ink"` (sets ink bg, mist text, white headings, light focus ring). Light sections use `bg-paper` or `bg-white`.

**Radius:** `rounded-control` (8px) for buttons/inputs/small chips, `rounded-media` (20px) for large images and media panels only. Nothing else is rounded. No drop shadows except where a photo needs separation.

**Layout:** `container-site` for horizontal padding and max width. Left-aligned, asymmetric 12-column grids (`lg:grid-cols-12`, e.g. text `lg:col-span-5`, media `lg:col-start-7 lg:col-span-6`). Section vertical rhythm: `py-20 sm:py-28 lg:py-32`. Mobile first — every layout must work at 360px wide.

## Components you must use (do not edit them)

- `components/ui/Button` — `<Button to={to('contact')}>` internal, `<Button href={COMPANY.whatsappHref}>` external, `variant="secondary"` on light, `variant="onInk"` on ink. Do not append arrows to button text.
- `components/ui/PageIntro` — opening section for every inner page: `<PageIntro title intro aside? children? />` (children = buttons). It already handles header clearance and its own entrance motion.
- `components/ui/Reveal` — one quiet scroll-in. At most ONE or TWO per section (e.g. the image, or the section heading block). Never wrap every card/list item.
- `components/ui/Logo`, `components/ContactForm` (the only form; drop it in as-is), `components/HomeHero` (home only).
- Icons: `lucide-react`, size `h-5 w-5` or `h-6 w-6`, `aria-hidden`, colour `text-jacaranda` on light or `text-jacaranda-light` on ink. Icons support text; they are never decoration in a coloured box.
- Images: import from `src/assets/*.webp|avif`; always `loading="lazy" decoding="async"`, real `alt` text from copy, `object-cover` inside a sized wrapper with `rounded-media overflow-hidden`.

## Rules that make this site not look generated

Do NOT:
- Put an ALL-CAPS tracked label/eyebrow above headings. No eyebrows at all.
- Italicise/colour/bold one word inside a headline.
- Use `01 / 02 / 03` numbering unless the content really is a sequence (the Starlink install process IS one — use it there only).
- Build grids of identical rounded cards with shadows and icon tiles. Prefer: lists with hairline dividers (`divide-y divide-mist/60`), two-column split rows, definition lists, a large image beside text.
- Use gradient backgrounds, glassmorphism panels, `hover:scale`, or fade-up on every element.
- Use `→` or arrows in link/button text, middle-dot `·` separators, monospace labels.
- Use giant "100% satisfaction" style stat strips. The only numbers we state are true facts: 50+ projects, 18+ team members, 2+ years.

DO:
- Motion that answers the user: hover states change colour/underline; accordions animate height (`AnimatePresence` + `motion.div` with `height: 'auto'`); tabs slide an indicator with `layoutId`.
- Use real specifics: Maputo, Matola, provinces, lodges, machambas (farms), offices, NGOs, mining sites, boats/vehicles (Starlink Mini / roaming), load-shedding resilience, etc.
- Accessible: semantic headings in order (one `h1` per page — PageIntro provides it), `button` for actions, focus visible, sufficient contrast (slate on paper, mist on ink), tap targets ≥ 44px.

## Facts you may use (do not invent others)

- Authorised Starlink Retailer; sells Starlink kits (Standard, Mini), installation, mounting, support; Starlink for homes, businesses, roaming/mobile.
- IT services: networking & infrastructure (design, cabling, Wi-Fi, firewalls, network security), software development (web, mobile, business systems), hardware sales & support (computers, servers, peripherals, maintenance), IT training (courses for staff, certifications prep).
- 2+ years operating, 50+ projects completed, 18+ team members. Based in Maputo, works across Mozambique.
- Contact: see `COMPANY`. Business hours in `COMPANY.hours`.
- Starlink plans and prices are set by Starlink and change; never quote a price. Say "we'll confirm current kit price and plan options" instead.

## Done means

- `npx tsc -b` and `npx eslint .` pass with zero errors.
- Both `/x` (pt) and `/en/x` render with no English left on the PT page and vice versa.
- Works at 360px, 768px and 1440px.
