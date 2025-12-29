import { create } from 'zustand'

export type TimeRange = '1h' | '24h' | '7d'

export type MetricFilter = 'all' | 'active_users' | 'error_rate' | 'revenue'

interface UIState {
  timeRange: TimeRange
  metricFilter: MetricFilter
  search: string

  setTimeRange: (range: TimeRange) => void
  setMetricFilter: (filter: MetricFilter) => void
  setSearch: (value: string) => void

  isSidebarOpen: boolean
  toggleSidebar: () => void

  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useUIStore = create<UIState>((set) => ({
  timeRange: '1h',
  metricFilter: 'all',
  search: '',

  setTimeRange: (range) => set({ timeRange: range }),
  setMetricFilter: (filter) => set({ metricFilter: filter }),
  setSearch: (value) => set({ search: value }),

  isSidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  theme: 'dark',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark'
    }))
}))


