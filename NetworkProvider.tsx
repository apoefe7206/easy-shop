import React, { PropsWithChildren } from "react";
import {
  Mutation,
  MutationCache,
  Query,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from "@tanstack/react-query";
import { useToast } from "react-native-toast-notifications";

const NetworkProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const toast = useToast();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
    mutationCache: new MutationCache({
      onError: async (error, variables, context, mutation) => {
        let errorCode = error?.message.substring(
          error.message.length - 3,
          error.message.length
        );
        requestErrorHandler(errorCode, undefined, mutation);
      },
    }),
    queryCache: new QueryCache({
      onError: async (error, query) => {
        let errorCode = error?.message.substring(
          error.message.length - 3,
          error.message.length
        );
        requestErrorHandler(errorCode, query);
      },
    }),
  });

  const requestErrorHandler = async (
    errorCode: string,
    query?: Query<unknown, unknown, unknown, QueryKey>,
    mutation?: Mutation<unknown, unknown, unknown, unknown>
  ) => {
    if (errorCode === "401") {
      toast.show("Please Check Url", {
        type: "error",
      });
    }
  };

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default NetworkProvider;
