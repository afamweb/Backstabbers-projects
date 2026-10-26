# The Backstarbbers

Static website for The Backstarbbers tech collective.

| Page | File |
|---|---|
| Collective (home + contact) | `index.html` |
| The Syndicate | `syndicate.html` |
| Projects & Arsenal | `projects.html` |
| Tech Matrix | `tech-matrix.html` |

## Editing

Pages are plain HTML styled with Tailwind. The compiled stylesheet `styles.css` is committed, so the site deploys as-is with no build step.

If you add or change Tailwind classes, rebuild the stylesheet:

```
npm install
npm run build
```

Design tokens (colours, fonts, spacing) live in `tailwind.config.js`.
