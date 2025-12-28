import type { MetricSeries } from '../types/metrics'
import type { EventLog } from '../types/events'
import type { Alert } from '../types/alerts'

const now = Date.now()

export function generateMetrics(): MetricSeries[] {
  const points = Array.from({ length: 60 }).map((_, i) => ({
    timestamp: now - (60 - i) * 60_000,
    value: Math.round(Math.random() * 100)
  }))

  return [
    {
      id: '1',
      type: 'active_users',
      label: 'Active Users',
      unit: 'users',
      data: points
    },
    {
      id: '2',
      type: 'error_rate',
      label: 'Error Rate',
      unit: '%',
      data: points.map((p) => ({
        ...p,
        value: +(Math.random() * 5).toFixed(2)
      }))
    },
    {
      id: '3',
      type: 'revenue',
      label: 'Revenue',
      unit: '$',
      data: points.map((p) => ({
        ...p,
        value: Math.round(Math.random() * 1000)
      }))
    }
  ]
}

export function generateEvents(): EventLog[] {
  return Array.from({ length: 200 }).map((_, i) => ({
    id: String(i),
    message: 'Service latency spike detected',
    service: ['Auth', 'Payments', 'Search'][i % 3],
    severity: ['low', 'medium', 'high'][i % 3] as any,
    timestamp: now - i * 30_000
  }))
}

export function generateAlerts(): Alert[] {
  return [
    {
      id: 'a1',
      metricType: 'error_rate',
      threshold: 5,
      currentValue: 7.2,
      status: 'open',
      triggeredAt: now - 120_000
    }
  ]
}
