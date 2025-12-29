import type { MetricSeries } from '../../types/metrics'
import type { MetricFilter } from '../../app/store'

export function filterMetrics(
  metrics: MetricSeries[],
  filter: MetricFilter,
  search: string
) {
  return metrics.filter((m) => {
    if (filter !== 'all' && m.type !== filter) return false
    if (search && !m.label.toLowerCase().includes(search.toLowerCase()))
      return false
    return true
  })
}
