import { Virtuoso } from 'react-virtuoso'
import { useAlertStore } from './alertStore'
import { useEffect, useRef } from 'react'

export default function Alerts() {
  const alerts = useAlertStore((s) => s.alerts)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  if (alerts.length === 0) {
    return <div className="text-slate-300">No alerts 🎉</div>
  }

  return (
    <div>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mb-6 text-2xl font-semibold"
      >
        Alerts
      </h2>

      <div className="h-[500px]">
        <Virtuoso
          data={alerts}
          itemContent={(_, alert) => (
            <div className="p-2">
              <div
                role="alert"
                aria-live="assertive"
                className={`rounded p-4 ${
                  alert.status === 'open'
                    ? 'bg-red-900/40'
                    : 'bg-green-900/40'
                }`}
              >
                <div className="flex justify-between">
                  <strong>{alert.metricType}</strong>
                  <span className="text-sm">
                    {alert.status.toUpperCase()}
                  </span>
                </div>

                <div className="mt-1 text-sm text-slate-300">
                  Current: {alert.currentValue} / Threshold:{' '}
                  {alert.threshold}
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}
