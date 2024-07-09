'use client';
import { useLoaderStore } from '@/app/store/loaderStore';
import { useLoading } from '@/hooks/useLoading';
import SmallStatsCard, { smallStatsCardProps } from '@/app/components/cards/smallStatsCard';
import React from 'react';
import { Carousel } from 'primereact/carousel';

interface PageProps {}

export default function Dashboard({}: PageProps) {
    const { setIsLoading } = useLoaderStore();
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
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1,
        },
    ];
    useLoading(false, setIsLoading);

    const productTemplate = (card: smallStatsCardProps) => {
        return (
            <div>
                <SmallStatsCard title={card.title} data={card.data} chartsData={card.chartsData} />
            </div>
        );
    };
    return (
        <>
            <div className="layout-container layout-light layout-colorscheme-menu layout-static layout-static-inactive p-ripple-disabled">
                {/*top 4 stats cards*/}
                {/*if smartphone, then place cards in carousel*/}
                {window.innerWidth < 768 ? (
                    <Carousel
                        value={smallCardData}
                        numVisible={3}
                        numScroll={3}
                        responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate}
                    />
                ) : (
                    <div className="flex flex-wrap justify-content-center">
                        {/*here 4 small cards will be aligned next to each other on a fullhd screen*/}
                        {smallCardData.map((card, index) => {
                            return (
                                <div key={index} className="lg:col-3 md:col-3 sm:col-6">
                                    <SmallStatsCard
                                        title={card.title}
                                        data={card.data}
                                        chartsData={card.chartsData}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}
