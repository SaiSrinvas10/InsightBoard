import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './Dashboard'
import { test, expect } from "vitest";
import { MemoryRouter } from 'react-router-dom';

const client = new QueryClient()

test('renders dashboard heading', async () => {
  render(
    <MemoryRouter>
    <QueryClientProvider client={client}>
      <Dashboard />
    </QueryClientProvider>
    </MemoryRouter>
  )

  expect(await screen.findByText(/dashboard/i)).toBeTruthy()
})
