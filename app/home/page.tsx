import React from 'react';
import MainContent from '@/app/home/components/mainContent';
import Aside from '@/app/home/components/aside';

interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <div className="flex flex-column">
            <main className="p-5">
                <div className="grid">
                    <div className="col-12 md:col-9">
                        <MainContent />
                    </div>
                    <div className="col-12 md:col-3">
                        <Aside />
                    </div>
                </div>
            </main>
        </div>
    );
}