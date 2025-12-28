import { create } from 'zustand'

export type TimeRange = '1h' | '24h' | '7d'

interface UIState {
  timeRange: TimeRange
  setTimeRange: (range: TimeRange) => void

  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export const useUIStore = create<UIState>((set) => ({
  timeRange: '1h',
  setTimeRange: (range) => set({ timeRange: range }),

  isSidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
}))
