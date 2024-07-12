'use client';
import { useLoaderStore } from '@/app/store/loaderStore';
import { useLoading } from '@/hooks/useLoading';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import SmallStatsCard from '@/app/components/carts/smallStatsCard';
import BigCardChart, { BigStatsCardProps, CardBody } from '@/app/components/carts/bigCardChart';
import { Button } from 'primereact/button';
import { useStrengthScore } from '@/hooks/useStrengthScore';

interface PageProps {}

interface SmallStatsCardProps {
    title: string;
    data: {
        prevScore: number;
        currentScore: number;
    };
    chartsData: {
        label: string;
        data: number[];
        fill: boolean;
        borderColor: string | undefined;
        tension: number;
        pointRadius: number;
    };
    labels: string[];
}

export default function Dashboard({}: PageProps) {
    const { setIsLoading } = useLoaderStore();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 575);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const initialParams = {
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-06-30'),
        weightMultiplier: 1,
        volumeMultiplier: 0.5,
        difficultyMultiplier: 1.2,
    };
    const { result, isLoading, error, updateParams } = useStrengthScore(initialParams);
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;
    // if (!result) return null;

    const smallCardData: SmallStatsCardProps[] = [
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        },
    ];
    const bigCardData: CardBody[] = [
        {
            title: '(DB) Bench Press',
            data: {
                prevScore: 10,
                currentScore: 2,
            },
            chartsData: {
                label: 'First Dataset',
                data: [25, 29, 30, 42, 35, 34, 50],
                fill: false,
                borderColor: 'black',
                tension: 0.4,
                pointRadius: 3,
            },
        },
        {
            title: 'Lat Pulldown',
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
                pointRadius: 3,
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

    const productTemplate = (card: SmallStatsCardProps) => {
        return (
            <div>
                <SmallStatsCard
                    title={card.title}
                    data={card.data}
                    chartsData={card.chartsData}
                    labels={card.labels}
                />
            </div>
        );
    };

    return (
        <>
            <div className="layout-container layout-light layout-colorscheme-menu layout-static layout-static-inactive p-ripple-disabled">
                {isMobile ? (
                    <Carousel
                        value={smallCardData}
                        numVisible={3}
                        numScroll={3}
                        responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate}
                    />
                ) : (
                    <div className="xl:center-horizontally flex">
                        <div className="w-full xl:max-w-110rem px-4">
                            <div className="flex flex-wrap justify-content-center">
                                {smallCardData.map((card, index) => (
                                    <div key={index} className="sm:col-6 md:col-6 lg:col-3">
                                        <SmallStatsCard
                                            title={card.title}
                                            data={card.data}
                                            chartsData={card.chartsData}
                                            labels={card.labels}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-content-center">
                                {bigCardData.map((card, index) => (
                                    <div key={index} className="sm:col-12 md:col-12 lg:col-6">
                                        <BigCardChart body={card} changedChart={() => {}} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
