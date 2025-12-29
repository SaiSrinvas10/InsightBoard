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
            className="rounded px-3 py-1 text-sm 
              ${timeRange === range
                ? 'bg-sky-600 text-white'
                : 'bg-slate-200 text-slate-900
                  dark:bg-slate-800 dark:text-slate-300
                  hover:bg-slate-300 dark:hover:bg-slate-700'
              }"
        >
          {range}
        </button>
      ))}
    </div>
  )
}
