import { useEffect, useState } from 'react';

import { getUrlWithSearchParams } from 'tools/getUrlWithSearchParams';

interface IApiResponse<T = Record<string, unknown>> {
  data?: T;
  error?: Record<string, unknown>;
  isFetching: boolean;
  isFetched: boolean;
  isError: boolean;
}

export const useApi = <T>(path: string, queryParams: Record<string, string> = {}): IApiResponse<T> => {
  const [state, setState] = useState<IApiResponse<T>>({ isFetching: true, isFetched: false, isError: false });
  useEffect(() => {
    fetch(getUrlWithSearchParams(path, queryParams ?? {}))
      .then(res => res.json())
      .then(
        successResult => {
          setState({
            data: successResult,
            isError: false,
            isFetching: false,
            isFetched: true,
            error: undefined,
          });
        },
        errorResult => {
          setState({
            error: errorResult,
            isError: true,
            isFetching: false,
            isFetched: true,
          });
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, JSON.stringify(queryParams)]);
  return state;
};
