import React, { useRef } from 'react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toast } from 'primereact/toast';
import {useUser} from "@auth0/nextjs-auth0/client";

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
    const { user } = useUser();
    const toast = useRef<Toast>(null);
    const queryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: (error, query) => {
                // 🎉 only show error toasts if we already have data in the cache
                // which indicates a failed background update
                console.table(JSON.stringify(error));
                // if (query.state.data !== undefined) {
                //     console.table(JSON.stringify(error));
                // }
            },
        }),
        mutationCache: new MutationCache({
            onError: (error, query) => {
                // 🎉 only show error toasts if we already have data in the cache
                // which indicates a failed background update
                console.table(JSON.stringify(error));
                // if (query.state.data !== undefined) {
                //     console.table(JSON.stringify(error));
                // }
            },
        }),
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Toast ref={toast} />
            {user && children}
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
        </QueryClientProvider>
    );
}