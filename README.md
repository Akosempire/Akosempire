# NISO System

**NISO System** stands for **Nigeria Independent System Operation**.

> Used by NISO under the Transmission Company of Nigeria (TCN).

This repository contains a production-structured modular monolith built with Next.js + Prisma for national transmission operations management.

## Tech Stack

- Next.js (App Router) + TypeScript (strict)
- Prisma ORM + PostgreSQL
- Tailwind CSS (flat institutional design, no gradients)
- Zod validation + React Hook Form (form layer)
- TanStack Query (data fetching strategy)
- JWT session authentication (HTTP-only cookie)
- Queue-ready service abstractions for notifications, reporting, and SCADA ingestion

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env file:
   ```bash
   cp .env.example .env
   ```
3. Create database and run migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Seed sample operational data:
   ```bash
   npm run prisma:seed
   ```
5. Start development server:
   ```bash
   npm run dev
   ```

## Environment Variables

| Key | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret used for signing session JWTs |
| `APP_NAME` | Application name (defaults to NISO System) |

## Architecture Overview

### App Router structure

- `app/(auth)` login, forgot password, reset password
- `app/(dashboard)` shared operational dashboard shell
- `app/(operator)` operator workflows (readings, interruptions, operations, events, messages, knowledge)
- `app/(admin)` admin setup and governance pages
- `app/(management)` management monitoring boards and reports
- `app/api/*` modular HTTP interfaces

### Domain modules (`src/modules`)

Each module follows a consistent layered structure:

- `types`
- `schemas` (Zod)
- `repository` (data access)
- `service` (business orchestration)
- `controller` (HTTP-oriented response layer)
- `components` (module UI blocks)

Implemented modules:

- auth
- users
- roles
- permissions
- regions
- stations
- devices
- parameters
- readings
- interruptions
- operations
- events
- messaging
- knowledge
- notifications
- reports
- audit
- settings
- scada

### Cross-cutting services

- `src/services/notification-orchestrator.ts`: provider abstraction for WhatsApp/SMS/Email/In-app.
- `src/services/offline-sync.ts`: local queue abstraction for offline-capable workflows.
- `src/services/report-builder.ts`: Excel report generation abstraction.
- `src/services/scada-ingestion.ts`: SCADA-ready ingestion placeholder.

## Database schema highlights

`prisma/schema.prisma` includes normalized and indexed tables for:

- users, roles, permissions, role_permissions, user_scopes
- regions, stations, device_types, devices
- parameter_definitions, device_parameter_configs
- shifts, condition_codes
- reading_batches, reading_entries, reading_entry_values
- interruptions, interruption_cause_codes, interruption_status_history
- operations, operation_forms, operation_status_history
- events, messages, message_threads
- knowledge_categories, knowledge_articles, knowledge_files
- notification_channels, notification_recipients, notification_rules
- audit_logs, scada_mappings, sync_queue, settings

## Seed Data

`prisma/seed.ts` loads:

- one region (North Central)
- one station (Jebba)
- sample 330kV circuits and transformer
- shifts A/B/C
- condition and interruption cause codes
- role set for ICT Admin, Regional Admin, Station Admin, Supervisor, Operator, Viewer, Knowledge Admin
- sample users and scope assignment
- sample knowledge article and operational message thread

## Security foundation

- Password hashing (`bcryptjs`)
- JWT signed sessions via HTTP-only cookie
- Middleware-based protected routes
- Login audit trail foundation
- Scope model (`user_scopes`) supports region/station/device/parameter-level filtering

## Operational design language

- Flat, serious, utility-grade interface
- No gradients or flashy animation
- High whitespace, subtle borders, clear hierarchy
- Keyboard-friendly data-entry table style for hourly readings

## API Foundation (MVP)

Available route handlers:

- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/readings`
- `POST /api/interruptions`
- `PATCH /api/interruptions`

These routes enforce Zod payload validation and use modular service/repository layers.

