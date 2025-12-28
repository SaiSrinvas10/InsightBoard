export type AlertStatus = 'open' | 'resolved'

export interface Alert {
  id: string
  metricType: string
  threshold: number
  currentValue: number
  status: AlertStatus
  triggeredAt: number
}
