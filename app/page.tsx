import React from 'react';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { getData } from '@/lib/types';
import Dashboard from '@/app/dashboard/page';

export default async function Home() {
    const data = await getData();
    return (
        <div className="m-4">
            <div className="layout-container layout-light layout-colorscheme-menu layout-static layout-static-inactive p-ripple-disabled">
                <div>{/*sidebar*/}</div>
                <div>
                    {/*top bar*/}
                    {/*content*/}
                </div>
            </div>
        </div>
    );
}
