import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useUIStore } from '../app/store'

export function useSyncFiltersWithUrl() {
  const [params, setParams] = useSearchParams()
  const {
    timeRange,
    metricFilter,
    setTimeRange,
    setMetricFilter
  } = useUIStore()

  // Load from URL
  useEffect(() => {
    const range = params.get('range')
    const metric = params.get('metric')

    if (range) setTimeRange(range as any)
    if (metric) setMetricFilter(metric as any)
  }, [])

  // Push to URL
  useEffect(() => {
    setParams({
      range: timeRange,
      metric: metricFilter
    })
  }, [timeRange, metricFilter])
}
