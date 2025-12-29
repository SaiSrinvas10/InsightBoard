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

  const { data, isLoading, error } = useMetrics()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading metrics</div>

  const visibleMetrics = data
    ? filterMetrics(data, metricFilter, search)
    : []

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
          <div
            key={metric.id}
            className="rounded bg-slate-900 p-4"
          >
            <h3 className="mb-4 text-lg font-medium">
              {metric.label}
            </h3>

            <MetricLineChart
              data={metric.data}
              unit={metric.unit}
            />
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
