'use client';
import React from 'react';
import Dashboard from '@/app/dashboard/page';

export default function Home() {
    return (
        <div className="m-4">
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/logout">Logout</a>
            <div className="">
                <div>
                    <Dashboard/>
                </div>
            </div>
        </div>
    );
}