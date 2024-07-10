import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { ReactQueryProvider } from '@/app/reactQueryProvider';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import Link from 'next/link';
import { useLoaderStore } from '@/app/store/loaderStore';

interface AuthenticatedQueryProviderProps {
    children: React.ReactNode;
}
export const AuthenticatedQueryProvider = ({ children }: AuthenticatedQueryProviderProps) => {
    const { user, isLoading } = useUser();
    const { setIsLoading } = useLoaderStore();
    useEffect(() => {
        console.log('isLoading', isLoading);
        if (isLoading) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, []);

    if (!user && !isLoading) {
        // User is not authenticated, render a fallback or redirect to login
        return (
            <div>
                <div className="flex align-items-center justify-content-center">
                    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-3">
                        <div className="text-center mb-5">
                            <img src="../favicon.ico" alt="hyper" height={50} className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                            {/*<span className="text-600 font-medium line-height-3">*/}
                            {/*    Don't have an account?*/}
                            {/*</span>*/}
                            {/*<a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">*/}
                            {/*    Create today!*/}
                            {/*</a>*/}
                        </div>

                        <div>
                            {/*    <label htmlFor="email" className="block text-900 font-medium mb-2">*/}
                            {/*        Email*/}
                            {/*    </label>*/}
                            {/*    <InputText*/}
                            {/*        id="email"*/}
                            {/*        type="text"*/}
                            {/*        placeholder="Email address"*/}
                            {/*        className="w-full mb-3"*/}
                            {/*    />*/}

                            {/*    <label htmlFor="password" className="block text-900 font-medium mb-2">*/}
                            {/*        Password*/}
                            {/*    </label>*/}
                            {/*    <InputText*/}
                            {/*        id="password"*/}
                            {/*        type="password"*/}
                            {/*        placeholder="Password"*/}
                            {/*        className="w-full mb-3"*/}
                            {/*    />*/}

                            {/*    <div className="flex align-items-center justify-content-between mb-6">*/}
                            {/*        <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">*/}
                            {/*            Forgot your password?*/}
                            {/*        </a>*/}
                            {/*    </div>*/}

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

    // User is authenticated, render the ReactQueryProvider and its children
    return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
