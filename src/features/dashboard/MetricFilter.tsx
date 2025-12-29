import type { MetricFilter } from '../../app/store'
import { useUIStore } from '../../app/store'

const options: MetricFilter[] = [
  'all',
  'active_users',
  'error_rate',
  'revenue'
]

export default function MetricFilter() {
  const metricFilter = useUIStore((s) => s.metricFilter)
  const setMetricFilter = useUIStore((s) => s.setMetricFilter)

  return (
    <select
      value={metricFilter}
      onChange={(e) => setMetricFilter(e.target.value as MetricFilter)}
      className="rounded bg-slate-800 px-3 py-1 text-sm text-white"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt.replace('_', ' ')}
        </option>
      ))}
    </select>
  )
}
