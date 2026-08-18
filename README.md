# bennyavelin.github.io

Personal academic website for Benny Avelin, migrated from Google Sites and designed to be hosted with GitHub Pages.

The homepage cover is served from `assets/research-cover.webp`; the full-quality generated source is retained as `assets/research-cover.png`.

## Preview locally

Open `index.html` directly, or run a local static server:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Updating publications

Edit `data/publications.js`. Entries are grouped into `preprints` and `publications`; each entry supports `year`, `title`, optional `authors`, optional `note`, and an optional list of labelled links. The page renders these entries automatically.

## Publishing

Push the `main` branch to the GitHub repository `BennyAvelin/bennyavelin.github.io`. GitHub Pages user sites publish from that repository at <https://bennyavelin.github.io/>.
