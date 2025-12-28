import { useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchMetrics } from '../../services/api'
import {
  connectWebSocket,
  disconnectWebSocket,
  subscribe
} from '../../services/websocket'
import type { MetricSeries } from '../../types/metrics'

export function useMetrics() {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['metrics'],
    queryFn: fetchMetrics
  })

  useEffect(() => {
    connectWebSocket()

    const unsubscribe = subscribe((update) => {
      queryClient.setQueryData<MetricSeries[]>(
        ['metrics'],
        (old) => {
          if (!old) return old

          return old.map((series) => {
            if (series.type !== update.type) return series

            const newPoint = update.data?.[0]
            if (!newPoint) return series

            return {
              ...series,
              data: [...series.data.slice(-59), newPoint]
            }
          })
        }
      )
    })

    return () => {
      unsubscribe()
      disconnectWebSocket()
    }
  }, [queryClient])

  return query
}
