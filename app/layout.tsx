'use client';
import { Inter } from 'next/font/google';
import React, { ReactNode, useEffect, useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import './styles/globals.css';
import { APP_NAME } from '@/app/constants/ui';
import SideNav from '@/app/components/sideNav';
import { useLoaderStore } from '@/app/store/loaderStore';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import TopBar from '@/app/components/topBar';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';
import { AuthenticatedQueryProvider } from '@/app/providers/authenticatedQueryProvider';
import { ReactQueryProvider } from '@/app/providers/reactQueryProvider';
// import 'primereact/resources/themes/lara-dark-purple/theme.css';

import localFont from 'next/font/local';

const inter = localFont({
    src: [
        {
            path: '../public/fonts/Inter-VariableFont_opsz,wght.ttf',
            style: 'normal',
        },
        {
            path: '../public/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
            style: 'italic',
        },
    ],
    variable: '--font-inter',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const [showNav, setShowNav] = React.useState<boolean>(false);
    const { isLoading } = useLoaderStore();
    const [showSpinner, setShowSpinner] = useState(false);
    const [initialLoad, setInitialLoad] = useState(() => {
        if (typeof window !== 'undefined') {
            const isFirstLoad = !localStorage.getItem('hasLoadedBefore');
            if (isFirstLoad) {
                localStorage.setItem('hasLoadedBefore', 'true');
            }
            return isFirstLoad;
        }
        return true;
    });

    useEffect(() => {
        //add some extra time to spinner, so it doesn't look buggy
        if (!isLoading) {
            setTimeout(() => {
                setShowSpinner(false);
            }, 300); // Adjust the delay as needed
        } else {
            setShowSpinner(true);
        }
    }, [isLoading]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onbeforeunload = () => {
                localStorage.removeItem('hasLoadedBefore');
            };
        }
        // Simulate data fetching (replace with your actual logic)
        setTimeout(() => {
            setInitialLoad(false);
        }, 500); // Adjust the delay as needed
    }, [initialLoad]);

    return (
        <html lang="en" className={`${inter.variable} ${inter.className}`}>
            <UserProvider>
                <PrimeReactProvider>
                    <head>
                        <meta charSet="UTF-8" />
                        <meta name="Reason Codes" content="width=device-width, initial-scale=1.0" />
                        <title>{APP_NAME}</title>
                    </head>
                    <body className="surface-100 m-0">
                        <AuthenticatedQueryProvider>
                            <div style={{ minHeight: '100vh' }}>
                                <TopBar />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 100,
                                        left: 0,
                                        right: 0,
                                        zIndex: 1,
                                    }}
                                >
                                    <div className="m-2">{children}</div>
                                </div>
                            </div>
                            {/*<div>*/}
                            {/*    <TopBar />*/}
                            {/*    /!*<div className="flex m-4">*!/*/}
                            {/*    /!*    <Button*!/*/}
                            {/*    /!*        type="button"*!/*/}
                            {/*    /!*        onClick={() => setShowNav(!showNav)}*!/*/}
                            {/*    /!*        icon="pi pi-bars"*!/*/}
                            {/*    /!*        rounded*!/*/}
                            {/*    /!*        text*!/*/}
                            {/*    /!*        raised*!/*/}
                            {/*    /!*        className="h-2rem w-2rem"*!/*/}
                            {/*    /!*    />*!/*/}
                            {/*    /!*    <div className="w-full">{children}</div>*!/*/}
                            {/*    /!*</div>*!/*/}
                            {/*    /!*{showNav && <SideNav navClosed={() => setShowNav(false)} />}*!/*/}
                            {/*    <div className="w-full m-2">{children}</div>*/}
                            {/*</div>*/}
                        </AuthenticatedQueryProvider>
                        <div>
                            {initialLoad ||
                                (showSpinner && (
                                    <div className="spinner-container dark">
                                        <ProgressSpinner />
                                    </div>
                                ))}
                        </div>
                    </body>
                </PrimeReactProvider>
            </UserProvider>
        </html>
    );
}