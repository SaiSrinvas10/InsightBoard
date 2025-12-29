import { create } from 'zustand'
import type { Alert } from '../../types/alerts'

interface AlertState {
  alerts: Alert[]
  upsertAlerts: (updates: Alert[]) => void
}

export const useAlertStore = create<AlertState>((set) => ({
  alerts: [],
  upsertAlerts: (updates) =>
    set((state) => {
      const map = new Map(state.alerts.map((a) => [a.id, a]))

      updates.forEach((alert) => {
        map.set(alert.id, alert)
      })

      return { alerts: Array.from(map.values()) }
    })
}))
