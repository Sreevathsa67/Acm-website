# Assets

These files were pulled from the old `vvce.acm.org` site and keep its exact
folder layout and filenames, so the `image:` paths in `src/data/` match one for
one.

- `logo_acm.svg` — chapter logo, shown 40 × 40 in the navigation bar
- `Crop/`, `Crop/2018/` … `Crop/2024/` — team portraits, rendered at 3:4
- `img/event/`, `events/`, and the top level — event photos, rendered at 16:10

## Missing

`Crop/2019/ismael.png` — the file on the old server is a 128-byte stub, not a
real photo, so it wasn't copied. **Ismael R Nadaf** (Head Creative & Design,
2019-2020) currently shows a dashed placeholder on `/team`. Drop a real portrait
at that path and it will appear.

## Adding or replacing

Any image referenced in `src/data/` that isn't present here renders as a dashed
box of the correct size naming the file it expects, so the layout never shifts.
To use a different filename, update the matching `image:` field in
`src/data/events.ts` or `src/data/team.ts`.
