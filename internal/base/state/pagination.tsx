import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import ErrorHandler from "../middleware/error";

export type PaginationStateType<PaginationDataType> = {
  loading: boolean;
  params: any;
  total: number;
  data: Array<PaginationDataType>;
  onChangeParams: (params: any, replace?: boolean) => void;
  onFetchData: () => void;
};

export type PaginationStatePropTypes<APIResponseType> = {
  apiGet: (params: any) => Promise<AxiosResponse<APIResponseType>>;
  defaultParams?: any;
  hideQuery?: boolean;
};

const initialParams = {
  offset: 0,
  limit: 20,
};

const PaginationStateFn = <APIResponseType, PaginationDataType>(
  props: PaginationStatePropTypes<APIResponseType>
): PaginationStateType<PaginationDataType> => {
  const router = useRouter();
  const { apiGet, defaultParams } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [params, setParams] = useState<any>({
    ...initialParams,
    ...defaultParams,
    ...router.query,
  });
  const [total, setTotal] = useState<number>(0);
  const [data, setData] = useState<Array<PaginationDataType>>([]);

  useEffect(() => {
    !props.hideQuery && router.push(router.pathname, { query: { ...params } });
    setLoading(true);
    onFetchData();
  }, [params.limit]);

  const onChangeParams = useCallback(
    (newParams: any, replace?: boolean) => {
      if (replace) {
        setParams({ ...newParams });
      } else {
        setParams({ ...params, ...newParams });
      }
    },
    [params]
  );

  const onFetchData = useCallback(() => {
    apiGet &&
      apiGet(params)
        .then((resp: AxiosResponse<APIResponseType>) => {
          const responseData = resp?.data as any;
          setData(responseData?.results || []);
          setTotal(responseData?.count);
        })
        .catch(ErrorHandler)
        .finally(() => setLoading(false));
  }, [params]);

  return {
    loading,
    params,
    data,
    total,
    onFetchData,
    onChangeParams,
  };
};

export default PaginationStateFn;
