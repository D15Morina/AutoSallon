# Auto Saloni Vetura Ime — Version 6

Deployment-candidate refinement with a real text search, reliable controlled filters, local brand logo assets, bilingual content, and dynamic vehicle detail pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production check

```bash
npm run build
```

## Version 7 fixes
- Single-source live filtering with reliable reset behavior.
- Case-insensitive, punctuation-insensitive substring search (for example, Mercedes matches Mercedes-Benz).
- Newly filtered vehicle cards can no longer remain hidden by reveal animations.
- Local recognizable brand marks, including published Simple Icons assets for supported brands.

## Deployment

This package is configured for Vercel with:

- Node.js 20.x
- npm 10.9.2
- `npm ci` for deterministic dependency installation
- `npm run build` for production builds

Before pushing, do not commit `node_modules`, `.next`, or `.vercel`.
