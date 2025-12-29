# InsightBoard – Real-Time Analytics Dashboard

A production-grade real-time analytics dashboard built with React 18+, TypeScript, and modern frontend architecture, featuring live data streaming, alerting rules, performance optimization, and accessibility-first design.

## Live Demo
👉 https://insight-board-black.vercel.app/

## Key Features

- Real-time metric streaming with WebSocket simulation
- KPI dashboards with live-updating charts
- Rule-based alert engine with lifecycle management
- Advanced filtering with URL-synced state
- Performance optimization using memoization and virtualization
- Fully accessible UI (keyboard navigation, ARIA, focus management)
- Robust error handling with retry and graceful degradation

## Architecture Overview

- Server State: React Query (metrics, retries, caching)
- Client/UI State: Zustand (filters, theme, layout state)
- Real-time Updates: Event-driven WebSocket simulation
- Derived State: Pure selectors and rule engines
- Rendering: Memoized components + virtualized lists
 
 ## Performance Optimizations

- Memoized expensive components (charts, KPIs)
- Throttled real-time updates to prevent render storms
- Virtualized alert lists using react-virtuoso
- Derived data memoization using useMemo

## Resilience & Error Handling

- Global error boundary for runtime failures
- Retry handling for transient API errors
- Partial UI rendering when data is missing
- User-friendly recovery actions

## Accessibility & UX

- Keyboard-navigable UI with visible focus states
- ARIA labels and live regions for alerts
- Screen-reader-friendly alert announcements
- Global dark/light theme toggle

## Testing Strategy

- Unit tests for business logic (selectors, alert rules)
- Store tests for UI state (Zustand)
- Integration tests for core pages
- Avoided brittle snapshot/UI tests

## Tech Stack

- React 18+ / 19
- TypeScript
- Vite
- React Query
- Zustand
- Tailwind CSS
- Vitest + Testing Library
