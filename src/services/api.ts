import type { MetricSeries } from '../types/metrics'
import type { EventLog } from '../types/events'
import type { Alert } from '../types/alerts'

import { generateMetrics } from './mockData'
import { generateEvents } from './mockData'
import { generateAlerts } from './mockData'

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Simulates network latency & failures
 */
async function simulateRequest<T>(data: T): Promise<T> {
  await delay(500 + Math.random() * 500)

  // 5% failure rate
  if (Math.random() < 0.05) {
    throw new Error('Network error')
  }

  return data
}

export async function fetchMetrics(): Promise<MetricSeries[]> {
  return simulateRequest(generateMetrics())
}

export async function fetchEvents(): Promise<EventLog[]> {
  return simulateRequest(generateEvents())
}

export async function fetchAlerts(): Promise<Alert[]> {
  return simulateRequest(generateAlerts())
}
