import type { ReactNode } from 'react'
import { render } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'
import { test, expect } from "vitest";

function Boom(): ReactNode {
  throw new Error('Crash')
}

test('renders fallback UI on error', () => {
  const { getByText } = render(
    <ErrorBoundary>
      <Boom />
    </ErrorBoundary>
  )

  expect(getByText(/something went wrong/i)).toBeTruthy()
})
