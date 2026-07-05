# Codex Project Rules

This is a personal project published from `kouyawie-stack/world-flag-puzzle`.

## Identity

- Use the repository-local Git identity:
  - `user.name`: `kouyawie-stack`
  - `user.email`: `kouyawie-stack@users.noreply.github.com`
- Never commit with a work or company email in this repository.
- Before committing, verify:
  - `git config --get user.name`
  - `git config --get user.email`

## Editing

- The app is a static HTML/CSS/JS game.
- Edit the root files first:
  - `index.html`
  - `styles.css`
  - `script.js`
- Keep `public/` in sync before publishing:
  - `public/index.html`
  - `public/styles.css`
  - `public/script.js`
- Do not add external audio or image assets unless explicitly requested. Prefer self-contained CSS/Web Audio when possible.

## Verification

- Run `node --check script.js` after JavaScript changes.
- Check the local file URL in a mobile-sized viewport when UI changes are made.
- For mobile audio changes, remember that iPhone Safari requires sound to start from a user gesture.

## Publishing

- `main` stores the source.
- `gh-pages` stores the published `public/` contents.
- Push both branches when changes affect the deployed game.
