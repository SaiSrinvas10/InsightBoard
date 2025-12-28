import { useMetrics } from './hooks'
import MetricLineChart from '../../components/charts/MetricLineChart'
import KpiCard from '../../components/charts/KpiCard'
import { getLatestValue } from './utils'

import TimeRangeSelector from './TimeRangeSelector'

export default function Dashboard() {
  const { data, isLoading, error } = useMetrics()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading metrics</div>
  
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <TimeRangeSelector />
      </div>

      {/* KPI ROW */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {data!.map((metric) => (
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
        {data!.map((metric) => (
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
    </div>
  )
}
