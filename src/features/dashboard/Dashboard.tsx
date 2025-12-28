import { useMetrics } from './hooks'

export default function Dashboard() {
  const { data, isLoading, error } = useMetrics()

  if (isLoading) {
    return <div className="text-slate-400">Loading metrics...</div>
  }

  if (error) {
    return <div className="text-red-500">Failed to load metrics</div>
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Dashboard</h2>

      <div className="grid grid-cols-3 gap-4">
        {data!.map((metric) => (
          <div
            key={metric.id}
            className="rounded bg-slate-900 p-4"
          >
            <p className="text-sm text-slate-400">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-bold">
              {metric.data.at(-1)?.value} {metric.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
