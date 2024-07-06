'use client';
import { Inter } from 'next/font/google';
import React, { ReactNode, useEffect, useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import './styles/globals.css';
import { APP_NAME } from '@/app/constants/ui';
import SideNav from '@/app/components/sideNav';
import { useLoaderStore } from '@/app/store/loaderStore';
import { ReactQueryProvider } from '@/app/reactQueryProvider';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';

const inter = Inter({ subsets: ['latin'] });

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
        <html lang="en">
            <PrimeReactProvider>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="Reason Codes" content="width=device-width, initial-scale=1.0" />
                    <title>{APP_NAME}</title>
                </head>
                <body className="surface-50">
                    <Button
                        style={{ marginLeft: -12, position: 'fixed' }}
                        icon="pi pi-angle-double-right"
                        onClick={() => setShowNav(!showNav)}
                    />
                    <div className={`${inter.className} input-field-width bodyStyle`}>
                        {initialLoad ||
                            (showSpinner && (
                                <div className="spinner-container dark">
                                    <ProgressSpinner />
                                </div>
                            ))}
                        {showNav && <SideNav navClosed={() => setShowNav(false)} />}
                        <ReactQueryProvider>{children}</ReactQueryProvider>
                    </div>
                </body>
            </PrimeReactProvider>
        </html>
    );
}
