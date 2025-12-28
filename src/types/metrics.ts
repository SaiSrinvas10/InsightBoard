export type MetricType =
  | 'active_users'
  | 'error_rate'
  | 'revenue'

export interface MetricPoint {
  timestamp: number // unix ms
  value: number
}

export interface MetricSeries {
  id: string
  type: MetricType
  label: string
  unit: string
  data: MetricPoint[]
}
