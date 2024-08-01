'use client';
import React from 'react';
import Dashboard from '@/app/dashboard/page';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
    const { user } = useUser();
    return (
        <div className="m-4">
            <div className="">
                <div>
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}