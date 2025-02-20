import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNotification } from '@hooks'
import { apiUrl, request } from '@crud'
import type { UseReadProps } from './use-read.types'

export const useRead = ({
  url,
  resource,
  params,
  queryKey,
  queryRefetch = false,
  enableQuery
}: UseReadProps) => {
  const notify = useNotification()

  const { data, isPending, isFetching, isSuccess, error, refetch } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      return await request({
        url: apiUrl({
          url,
          resource,
          params
        }) as string,
        method: 'GET'
      })
    },
    refetchInterval: queryRefetch,
    enabled: enableQuery
  })

  useEffect(() => {
    if (error) notify(error, 'error')
  }, [error, notify])

  return {
    data,
    isPending,
    isFetching,
    isSuccess,
    error,
    refetch
  }
}
