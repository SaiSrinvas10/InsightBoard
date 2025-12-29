import { evaluateRules } from './rules'
import type { MetricSeries } from '../../types/metrics'
import type { Alert } from '../../types/alerts'
import { test, expect } from "vitest";

const metrics: MetricSeries[] = [
  {
    id: '1',
    type: 'error_rate',
    label: 'Error Rate',
    unit: '%',
    data: [{ timestamp: Date.now(), value: 7 }]
  }
]

test('triggers alert when threshold exceeded', () => {
  const alerts: Alert[] = []
  const result = evaluateRules(metrics, alerts)

  expect(result).toHaveLength(1)
  expect(result[0].status).toBe('open')
})

test('resolves alert when value drops', () => {
  const existing: Alert[] = [
    {
      id: 'a1',
      metricType: 'error_rate',
      threshold: 5,
      currentValue: 7,
      status: 'open',
      triggeredAt: Date.now()
    }
  ]

  const resolved = evaluateRules(
    [
      {
        ...metrics[0],
        data: [{ timestamp: Date.now(), value: 2 }]
      }
    ],
    existing
  )

  expect(resolved[0].status).toBe('resolved')
})
