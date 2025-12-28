export type EventSeverity = 'low' | 'medium' | 'high'

export interface EventLog {
  id: string
  message: string
  service: string
  severity: EventSeverity
  timestamp: number
}
