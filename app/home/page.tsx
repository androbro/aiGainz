'use client';
import React from 'react';
import MainContent from '@/app/home/components/mainContent';
import Aside from '@/app/home/components/aside';

interface PageProps {}

export default function Home({}: PageProps) {
    return (
        <div className="flex flex-column">
            <div className="grid">
                <div className="col-12 md:col-9">
                    <MainContent />
                </div>
                <div className="col-12 md:col-3">
                    <Aside />
                </div>
            </div>
        </div>
    );
}