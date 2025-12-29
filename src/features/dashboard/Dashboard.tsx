import { useMemo } from 'react'
import { useMetrics } from './hooks'
import MetricLineChart from '../../components/charts/MetricLineChart'
import KpiCard from '../../components/charts/KpiCard'
import { getLatestValue } from './utils'

import TimeRangeSelector from './TimeRangeSelector'
import MetricFilter from './MetricFilter'
import SearchInput from './SearchInput'

import { useSyncFiltersWithUrl } from '../../hooks/useSyncFiltersWithUrl'
import { useUIStore } from '../../app/store'
import { filterMetrics } from './selectors'

export default function Dashboard() {
  useSyncFiltersWithUrl()

  const metricFilter = useUIStore((s) => s.metricFilter)
  const search = useUIStore((s) => s.search)

  const { data, isLoading, error, isFetching } = useMetrics()

  const visibleMetrics = useMemo(() => {
    if (!data) return []
    return filterMetrics(data, metricFilter, search)
  }, [data, metricFilter, search])

  if (isLoading) {
    return <div className="text-slate-400">Loading...</div>
  }

  if (error && isFetching) {
    return (
      <div className="text-slate-400">
        Retrying to load data…
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded bg-red-900/30 p-6 text-red-200">
        <h3 className="mb-2 font-semibold">
          Failed to load dashboard data
        </h3>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 rounded bg-red-700 px-3 py-1 text-sm"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Dashboard</h2>

        <div className="flex items-center gap-3">
          <SearchInput />
          <MetricFilter />
          <TimeRangeSelector />
        </div>
      </div>

      {/* KPI ROW */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {visibleMetrics.map((metric) => (
          <KpiCard
            key={metric.id}
            label={metric.label}
            value={getLatestValue(metric)}
            unit={metric.unit}
          />
        ))}
      </div>

      {/* CHARTS */}
      <div className="space-y-8">
        {visibleMetrics.map((metric) => (
          <div key={metric.id} className="rounded bg-slate-100 dark:bg-slate-900 p-4">
            <h3 className="mb-4 text-lg font-medium">
              {metric.label}
            </h3>

            {metric.data.length === 0 ? (
              <div className="text-slate-400">
                No data available
              </div>
            ) : (
              <MetricLineChart
                data={metric.data}
                unit={metric.unit}
              />
            )}
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {visibleMetrics.length === 0 && (
        <div className="mt-12 text-center text-slate-400">
          No metrics match your filters
        </div>
      )}
    </div>
  )
}
