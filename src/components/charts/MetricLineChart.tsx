import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import type { MetricPoint } from '../../types/metrics'

import { memo } from 'react'

interface Props {
  data: MetricPoint[]
  color?: string
  unit?: string
}

function MetricLineChart({
  data,
  color = '#38bdf8',
  unit
}: Props) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis
            dataKey="timestamp"
            tickFormatter={(ts) =>
              new Date(ts).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })
            }
          />
          <YAxis />
          <Tooltip
            labelFormatter={(ts) =>
              new Date(ts).toLocaleString()
            }
            formatter={(value?: number) =>
              unit ? [`${value} ${unit}`] : [value]
            }
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default memo(MetricLineChart)