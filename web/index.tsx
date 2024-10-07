import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export type AppChildren<T extends object> = T & {
  children: ReactNode;
};

export const App = () => {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
};
