import type { MetricSeries } from '../types/metrics'

type Listener = (update: Partial<MetricSeries>) => void

let intervalId: number | null = null
const listeners = new Set<Listener>()

export function connectWebSocket() {
  if (intervalId !== null) return

  intervalId = window.setInterval(() => {
    const update = generateMetricUpdate()
    listeners.forEach((listener) => listener(update))
  }, 2000)
}

export function disconnectWebSocket() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

export function subscribe(listener: Listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

let lastEmit = 0

function generateMetricUpdate(): Partial<MetricSeries> {
  const now = Date.now()
  if (now - lastEmit < 3000) return {}

  lastEmit = now

  const types: MetricSeries['type'][] = [
    'active_users',
    'error_rate',
    'revenue'
  ]

  const type = types[Math.floor(Math.random() * types.length)]

  return {
    type,
    data: [
      {
        timestamp: Date.now(),
        value:
          type === 'error_rate'
            ? +(Math.random() * 5).toFixed(2)
            : Math.round(Math.random() * 1000)
      }
    ]
  }
}
