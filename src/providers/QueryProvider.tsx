import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const QueryProvider = ({ children }: { children?: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
        {children}
    </QueryClientProvider>
);

export default QueryProvider;
