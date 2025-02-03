import { useQuery } from "@tanstack/react-query";

import axiosClient from "../../../src/api/axios";

export const useQueryFetch = <T>(
  method: "POST" | "GET",
  queryKey: string,
  serviceUrl: string,
  params: any = {},
  config?: {
    gcTime?: number;
    staleTime?: number;
  }
) => {
  let query = useQuery<T>({
    queryKey: [queryKey],
    queryFn: async () => {
      return (await method) === "POST"
        ? axiosClient.post(serviceUrl, params)
        : axiosClient.get(serviceUrl);
    },
    ...config,
  });
  return query;
};
