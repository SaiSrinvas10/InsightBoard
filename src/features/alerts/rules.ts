import type { MetricSeries } from '../../types/metrics'
import type { Alert } from '../../types/alerts'

export interface AlertRule {
  metricType: string
  threshold: number
}

export const ALERT_RULES: AlertRule[] = [
  {
    metricType: 'error_rate',
    threshold: 5
  }
]

export function evaluateRules(
  metrics: MetricSeries[],
  existingAlerts: Alert[]
): Alert[] {
  const now = Date.now()
  const newAlerts: Alert[] = []

  for (const rule of ALERT_RULES) {
    const metric = metrics.find((m) => m.type === rule.metricType)
    if (!metric) continue

    const latest = metric.data.at(-1)?.value ?? 0

    const existing = existingAlerts.find(
      (a) => a.metricType === rule.metricType && a.status === 'open'
    )

    if (latest > rule.threshold && !existing) {
      newAlerts.push({
        id: crypto.randomUUID(),
        metricType: rule.metricType,
        threshold: rule.threshold,
        currentValue: latest,
        status: 'open',
        triggeredAt: now
      })
    }

    if (latest <= rule.threshold && existing) {
      newAlerts.push({
        ...existing,
        currentValue: latest,
        status: 'resolved'
      })
    }
  }

  return newAlerts
}
