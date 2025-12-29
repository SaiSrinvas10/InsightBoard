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
      className="rounded bg-slate-100 text-slate-900
           dark:bg-slate-800 dark:text-white
           border border-slate-300 dark:border-slate-700"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt.replace('_', ' ')}
        </option>
      ))}
    </select>
  )
}
