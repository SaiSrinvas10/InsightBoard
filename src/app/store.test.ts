import { act } from 'react'
import { useUIStore } from './store'
import { test, expect } from "vitest";

test('updates time range', () => {
  act(() => {
    useUIStore.getState().setTimeRange('24h')
  })

  expect(useUIStore.getState().timeRange).toBe('24h')
})

test('toggles sidebar', () => {
  const initial = useUIStore.getState().isSidebarOpen

  act(() => {
    useUIStore.getState().toggleSidebar()
  })

  expect(useUIStore.getState().isSidebarOpen).toBe(!initial)
})
