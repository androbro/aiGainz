import React from 'react';
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function Home() {
    return (
        <div className="m-4">
            <h1>Welcome to AIGainz</h1>
            <p>Your personal AI-powered fitness tracker</p>
            <Link href="/dashboard">
                <Button label="Go to Dashboard" />
            </Link>
        </div>
    );
}
