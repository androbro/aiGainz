'use client';
import {useLoaderStore} from '@/app/store/loaderStore';
import {useLoading} from '@/hooks/useLoading';
import SmallStatsCard, {smallStatsCardProps} from '@/app/components/cards/smallStatsCard';
import React from 'react';

interface PageProps {
}

export default function Dashboard({}: PageProps) {
    const {setIsLoading} = useLoaderStore();
    const smallCardData: smallStatsCardProps[] = [
        {
            title: 'Overall Strength',
            data: {
                prevScore: 10,
                currentScore: 2,
            },
            chartsData: {
                label: 'First Dataset',
                data: [25, 29, 30, 42, 35, 34, 50],
                fill: false,
                borderColor: undefined,
                tension: 0.4,
                pointRadius: 0,
            },
        },
        {
            title: 'Workout Consistency',
            data: {
                prevScore: 10,
                currentScore: 44,
            },
            chartsData: {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: undefined,
                tension: 0.4,
                pointRadius: 0,
            },
        },
        {
            title: 'Nutrition Consistency',
            data: {
                prevScore: 10,
                currentScore: 41,
            },
            chartsData: {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: undefined,
                tension: 0.4,
                pointRadius: 0,
            },
        },
        {
            title: 'Sleep Consistency',
            data: {
                prevScore: 10,
                currentScore: 4,
            },
            chartsData: {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: undefined,
                tension: 0.4,
                pointRadius: 0,
            },
        },
    ];
    useLoading(false, setIsLoading);
    return (
        <>
            <div
                className="layout-container layout-light layout-colorscheme-menu layout-static layout-static-inactive p-ripple-disabled">
                {/*top 4 stats cards*/}
                <div className="flex flex-wrap justify-content-center">
                    {/*here 4 small cards will be aligned next to each other on a fullhd screen*/}
                    {smallCardData.map((card, index) => {
                        return (
                            <div key={index} className="col-3 col-md-3">
                                <SmallStatsCard title={card.title} data={card.data} chartsData={card.chartsData}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
