# Vanguard Tactical

Production-oriented first-pass marketing site and Team OS prototype for Vanguard Tactical.

## Stack
- Next.js App Router
- React
- CSS only (no UI framework required)
- Vercel-ready

## Run locally
```bash
npm install
npm run dev
```

## Deploy
1. Upload this project to a new GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Next.js.
4. Deploy.

No environment variables are required for this public prototype.

## Before production launch
- Replace demo Pexels photography with owned/commissioned Vanguard imagery if desired.
- Connect `/login` to Supabase Auth.
- Add Supabase/Postgres data model for organisations, teams, members, events, assets, bookings and actions.
- Add Stripe only after the actual products/prices and compliance position are approved.
- Add Vapi, DJI and mapping connectors as separate integrations; do not fake live status.
- Add privacy, terms, cookie and data-protection pages before customer onboarding.
- Validate all indicative pricing and hire economics.

## Image credits used in prototype
Free-to-use Pexels photography by GMB VISUALS and Kony Xyzx. The site footer flags these as prototype photography.
