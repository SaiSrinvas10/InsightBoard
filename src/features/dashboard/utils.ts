import type { MetricSeries } from '../../types/metrics'

export function getLatestValue(series: MetricSeries) {
  return series.data.at(-1)?.value ?? 0
}
