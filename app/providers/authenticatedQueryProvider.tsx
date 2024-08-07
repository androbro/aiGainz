import React, { useEffect, useState } from 'react';
import { useUser, UserProfile } from '@auth0/nextjs-auth0/client';
import { Button } from 'primereact/button';
import { useLoaderStore } from '@/app/store/loaderStore';
import { ReactQueryProvider } from './reactQueryProvider';
import { mockUser } from './mockUser';

interface AuthenticatedQueryProviderProps {
    children: React.ReactNode;
}

export const AuthenticatedQueryProvider = ({ children }: AuthenticatedQueryProviderProps) => {
    const { user, isLoading } = useUser();
    const { setIsLoading } = useLoaderStore();
    const [devUser, setDevUser] = useState<UserProfile | null>(null);

    useEffect(() => {
        if (
            process.env.NODE_ENV === 'development' &&
            process.env.NEXT_PUBLIC_SKIP_AUTH === 'true'
        ) {
            setDevUser(mockUser as UserProfile);
        }
    }, []);

    useEffect(() => {
        if (isLoading) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [isLoading, setIsLoading]);

    const activeUser =
        process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_SKIP_AUTH === 'true'
            ? devUser
            : user;

    if (!activeUser && !isLoading) {
        return (
            <div>
                <div className="flex align-items-center justify-content-center mt-8 ">
                    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-3">
                        <div className="text-center mb-5">
                            <img src="../favicon.ico" alt="hyper" height={50} className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                        </div>
                        <div>
                            <Button
                                label="Sign In"
                                icon="pi pi-user"
                                className="w-full"
                                onClick={() => {
                                    //go to /api/auth/login
                                    window.location.href = '/api/auth/login';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <ReactQueryProvider>{children}</ReactQueryProvider>;
};