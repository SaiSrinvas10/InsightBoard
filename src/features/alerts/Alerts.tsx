import { useAlertStore } from './alertStore'

export default function Alerts() {
  const alerts = useAlertStore((s) => s.alerts)

  if (alerts.length === 0) {
    return (
      <div className="text-slate-400">
        No alerts triggered 🎉
      </div>
    )
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Alerts</h2>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`rounded p-4 ${
              alert.status === 'open'
                ? 'bg-red-900/40'
                : 'bg-green-900/40'
            }`}
          >
            <div className="flex justify-between">
              <span className="font-medium">
                {alert.metricType.toUpperCase()}
              </span>
              <span className="text-sm">
                {alert.status.toUpperCase()}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-300">
              Threshold: {alert.threshold} | Current:{' '}
              {alert.currentValue}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
