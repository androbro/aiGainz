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
                    {user ? (
                        <div>
                            <a href="/api/auth/logout">Logout</a>
                            <h1>Welcome {user.name}!</h1>
                            <p>Your email is {user.email}.</p>
                        </div>
                    ) : (
                        <div>
                            <h1>Welcome!</h1>
                        </div>
                    )}
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}
