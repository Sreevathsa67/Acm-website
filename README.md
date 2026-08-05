# VVCE ACM Student Chapter

The website of the Association for Computing Machinery Student Chapter at
Vidyavardhaka College of Engineering, Mysuru — the content of the old
`vvce.acm.org` site rebuilt on the pastel-blue design system.

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, domains marquee, about, the three latest events, FAQ, "Connect with us" |
| `/events` | Full events archive, filterable by year |
| `/team` | Every council from 2025-2026 back to 2018-2019 |
| `/bylaws` | The chapter by-laws, Articles I–XIII, with a sticky contents list |

There is no announcements page — news items live in the events archive.

## Development

Needs Node.js 20+.

```bash
npm install
```

```bash
npm run dev
```

The dev server runs on <http://localhost:8080>.

```bash
npm run build
```

## Editing content

All copy lives in `src/data/` — no JSX editing required:

| File | Contents |
| --- | --- |
| `src/data/site.ts` | Chapter name, email, social links, nav items, domain list |
| `src/data/events.ts` | Every event — the three newest also feed the home page |
| `src/data/team.ts` | Councils by year |
| `src/data/bylaws.ts` | The by-law articles |
| `src/data/faq.ts` | Home page FAQ — written for this site, so check the specifics against how the council actually runs things |

## Images

`public/Assets/` holds the images copied from the old site, under their original
paths. Anything referenced but not present renders as a dashed placeholder of
the right size naming the file it expects, so the layout never shifts — see
[`public/Assets/README.md`](public/Assets/README.md).

The chapter logo is `public/Assets/logo_acm.svg`, shown 40 × 40 in the nav.
