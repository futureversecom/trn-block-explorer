import { useMemo } from 'react'
import { graphQLClient } from '../client';

export const usePolling = <T>(
  initialData: T,
  queryFunction: Function,
  queryParams?: Record<string, unknown>,
  refetchInterval: number = 5000
) => {
  const { data, isFetching, isLoading, isError } = queryFunction(graphQLClient, queryParams, {
    refetchInterval,
    refetchIntervalInBackground: true,
  });

  return useMemo<T>(
    () => (data ? data : initialData),
    [data, initialData, isFetching, isLoading, isError]
  );
};
