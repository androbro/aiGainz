'use client';
import { useLoaderStore } from '@/app/store/loaderStore';
import { useLoading } from '@/hooks/useLoading';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { CardInformation } from '@/app/interfaces/card';
import SmallStatsCard from '@/app/components/cards/chartCard';

export default function Dashboard() {
    const { setIsLoading } = useLoaderStore();
    const isMobile = useMobileChecker();
    useLoading(false, setIsLoading);
    const [cardData, setCardData] = useState<CardInformation[]>([]);

    useEffect(() => {
        async function fetchCardData() {
            setIsLoading(true);
            try {
                const response = await fetch('/api/card');
                const fetchedCardData = await response.json();
                setCardData(fetchedCardData);
            } catch (error) {
                console.error('Error fetching card data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCardData();
    }, [setIsLoading]);

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

    const productTemplate = (card: CardInformation) => {
        return (
            <div>
                <SmallStatsCard
                    id={card.id}
                    title={card.title}
                    chartData={card.chartData}
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
                        value={cardData}
                        numVisible={3}
                        numScroll={3}
                        responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate}
                    />
                ) : (
                    <div className="xl:center-horizontally flex">
                        <div className="w-full xl:max-w-110rem px-4">
                            <div className="flex flex-wrap justify-content-center">
                                {cardData.map((card, index) => (
                                    <div key={index} className="sm:col-6 md:col-6 lg:col-3">
                                        <SmallStatsCard
                                            id={card.id}
                                            title={card.title}
                                            chartData={card.chartData}
                                            period={card.period}
                                        />
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
