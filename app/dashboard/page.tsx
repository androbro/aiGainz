'use client';
import { useLoaderStore } from '@/app/store/loaderStore';
import { useLoading } from '@/hooks/useLoading';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { CardPropData, useStrengthScore } from '@/hooks/useStrengthScore';
import { Nullable } from 'primereact/ts-helpers';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import SmallStatsCard, { Chart, SmallStatsCardProps } from '@/app/components/cards/chartCard';

export default function Dashboard() {
    const { setIsLoading } = useLoaderStore();
    const { result, isLoading, error, updateParams } = useStrengthScore({
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-06-30'),
        weightMultiplier: 1,
        volumeMultiplier: 0.5,
        difficultyMultiplier: 1.2,
    });
    const isMobile = useMobileChecker();

    useEffect(() => {
        setIsLoading(isLoading);
    }, [isLoading]);

    const chartData: Chart = {
        label: 'First Dataset',
        data: result?.dataPoints.map((dataPoint) => dataPoint.score) || [],
        fill: false,
        borderColor: undefined,
        tension: 0.4,
        pointRadius: 0,
        settings: {
            showLegend: false,
            showXAxis: false,
            showYAxis: false,
            maintainAspectRatio: false,
            responsive: false,
            width: 75,
        },
    };

    const smallCardData: SmallStatsCardProps[] = [
        {
            title: 'Overall Strength',
            data: result!,
            chart: {
                label: 'First Dataset',
                data: result?.dataPoints.map((dataPoint) => dataPoint.score) || [],
                fill: false,
                borderColor: undefined,
                tension: 0.4,
                pointRadius: 0,
                settings: {
                    showLegend: false,
                    showXAxis: false,
                    showYAxis: false,
                    maintainAspectRatio: false,
                    responsive: true,
                    height: 75,
                },
            },
            period: new Date('2024-01-01'),
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
                    chart={card.chart}
                    period={card.period}
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
                                            chart={card.chart}
                                            period={card.period}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-content-center">
                                {/*{bigCardData.map((card, index) => (*/}
                                {/*    <div key={index} className="sm:col-12 md:col-12 lg:col-6">*/}
                                {/*        <SmallStatsCard*/}
                                {/*            title={card.title}*/}
                                {/*            data={card.data}*/}
                                {/*            chart={card.chart}*/}
                                {/*            period={card.period}*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*))}*/}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
