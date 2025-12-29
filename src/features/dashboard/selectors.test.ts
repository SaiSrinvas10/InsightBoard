import { filterMetrics } from './selectors'
import type { MetricSeries } from '../../types/metrics'
import { test, expect } from "vitest";

const metrics: MetricSeries[] = [
  {
    id: '1',
    type: 'error_rate',
    label: 'Error Rate',
    unit: '%',
    data: []
  },
  {
    id: '2',
    type: 'revenue',
    label: 'Revenue',
    unit: '$',
    data: []
  }
]

test('filters by metric type', () => {
  const result = filterMetrics(metrics, 'error_rate', '')
  expect(result).toHaveLength(1)
  expect(result[0].type).toBe('error_rate')
})

test('filters by search text', () => {
  const result = filterMetrics(metrics, 'all', 'rev')
  expect(result).toHaveLength(1)
  expect(result[0].label).toBe('Revenue')
})
