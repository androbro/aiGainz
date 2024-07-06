import React from 'react';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { getData } from '@/lib/types';

export default async function Home() {
    const data = await getData();
    return (
        <div className="m-4">
            <h1>Welcome to AIGainz</h1>
            <p>{data}</p>
            <Link href="/dashboard">
                <Button label="Go to Dashboard" />
            </Link>
        </div>
    );
}
