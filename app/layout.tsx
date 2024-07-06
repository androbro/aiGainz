import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <PrimeReactProvider>
            <html lang="en">
                <body className="surface-50">
                    <div className="layout-container layout-light layout-colorscheme-menu layout-static layout-static-inactive p-ripple-disabled">
                        <div>{/*sidebar*/}</div>
                        <div>
                            {/*top bar*/}
                            {children}
                        </div>
                    </div>
                </body>
            </html>
        </PrimeReactProvider>
    );
}
