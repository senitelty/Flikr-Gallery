import { useEffect, useState } from 'react';

import { getUrlWithSearchParams } from 'tools/getUrlWithSearchParams';

interface IApiResponse<T = Record<string, unknown>> {
  data?: T;
  error?: Record<string, unknown>;
  isFetching: boolean;
  isFetched: boolean;
  isError: boolean;
}

export interface IOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (data: unknown) => void;
}

export const useApi = <T>(
  path: string,
  queryParams: Record<string, string> = {},
  options?: IOptions<T>
): IApiResponse<T> => {
  const [state, setState] = useState<IApiResponse<T>>({ isFetching: false, isFetched: false, isError: false });

  useEffect(() => {
    if (!state.isFetching) {
      setState(oldState => ({ ...oldState, isFetching: true }));

      fetch(getUrlWithSearchParams(path, queryParams ?? {}))
        .then(res => res.json())
        .then(
          successResult => {
            if (options?.onSuccess) {
              options?.onSuccess(successResult);
            }
            setState({
              data: successResult,
              isError: false,
              isFetching: false,
              isFetched: true,
              error: undefined,
            });
          },
          errorResult => {
            if (options?.onError) {
              options?.onError(errorResult);
            }
            setState({
              error: errorResult,
              isError: true,
              isFetching: false,
              isFetched: true,
            });
          }
        );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, JSON.stringify(queryParams)]);

  return state;
};
