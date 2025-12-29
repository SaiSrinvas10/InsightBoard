import type { TimeRange } from '../../app/store'
import { useUIStore } from '../../app/store'

const ranges: TimeRange[] = ['1h', '24h', '7d']

export default function TimeRangeSelector() {
  const timeRange = useUIStore((s) => s.timeRange)
  const setTimeRange = useUIStore((s) => s.setTimeRange)

  return (
    <div className="flex gap-2">
      {ranges.map((range) => (
        <button
            onClick={() => setTimeRange(range)}
            aria-pressed={timeRange === range}
            className="rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {range}
        </button>
      ))}
    </div>
  )
}
