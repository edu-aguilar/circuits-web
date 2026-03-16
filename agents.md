# Agents Guide (AI-Oriented)

This repository is a Next.js 14 (App Router) web app for pitbike circuit discovery in Spain. Use this guide to work safely and consistently as an AI agent.

## Objectives
- Preserve the existing architecture and patterns.
- Make minimal, targeted changes with clear intent.
- Avoid leaking secrets; never commit real credentials.

## Quick Repo Map
- `src/app/` App Router entrypoint (routes, layout, globals).
- `src/app/(routes)/` Route groups (e.g. `circuitos`, `dashboard`).
- `src/app/common/` Shared domain, infra, and UI components.
- `src/app/circuits/` Circuits feature: domain, infra, UI, actions.
- `public/` Static assets and icons.

## Architecture & Data Flow
The code follows a layered approach:
- UI components (React, server/client) call actions.
- Actions call use cases.
- Use cases call repositories.
- Repositories use `ApiService` (Axios) to call the backend API.

Typical flow: UI -> `ui/actions/*` -> `domain/usecases/*` -> `infra/repositories/*` -> API.

## Server vs Client Components
- App Router defaults to server components.
- Client components include `"use client"` and may use hooks and client-only libraries.
- `ApiService` uses `getKindeServerSession()` in an Axios interceptor. It is server-only by design.

## Routes and Pages
- `/` Home: links to circuits.
- `/circuitos` List with filters and search.
- `/circuitos/[name]` Detail page with maps and gallery.
- `/dashboard` Private page (auth-protected).

## External Integrations
- Kinde Auth (`@kinde-oss/kinde-auth-nextjs`).
- Google Analytics (`@next/third-parties`) and Vercel Analytics.
- Google AdSense and Google Maps Embed.

## Environment Variables
See `.env.example` for required variables. Key entries:
- `API_URL`
- `KINDE_*` (issuer, client, site URLs)
- `GMAPS_API_KEY`

Never hardcode secrets. If a value is needed, require it in env.

## Conventions
- Use TypeScript, strict mode enabled.
- Prefer the existing naming and folder structure.
- Keep UI presentational components small and focused.
- Keep domain logic in `domain/` and data access in `infra/`.
- `CircuitSearchParams` defines URL query keys.

## Commands
- `npm run dev` (port 3001)
- `npm run build`
- `npm run lint` / `npm run lint:fix`
- `npm run prettier` / `npm run prettier:fix`

## Quality & Safety Checks
- Avoid changing unrelated files.
- Be mindful of `next.config.mjs` image remote patterns (currently allow any host).
- Keep metadata SEO strings coherent with Spanish content.

## When Adding Features
- Identify the layer(s) impacted and keep the flow intact.
- Add or reuse actions/use cases rather than calling repositories directly from UI.
- Consider caching behavior and `noStore()` usage for dynamic data.

## Suggested PR/Commit Discipline
- Small, scoped commits with intent-driven messages.
- Include new environment variables in `.env.example`.
- Update docs when behavior changes.
