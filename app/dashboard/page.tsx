'use client';
import { useLoaderStore } from '@/app/store/loaderStore';
import { useLoading } from '@/hooks/useLoading';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import ChartCard from '@/app/components/cards/chartCard';
import { ExtendedCard } from '@/app/interfaces/types';

export default function Dashboard() {
    const { setIsLoading } = useLoaderStore();
    const isMobile = useMobileChecker();
    useLoading(false, setIsLoading);
    const [cardData, setCardData] = useState<ExtendedCard[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCardData() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch('/api/card');
                if (!response.ok) {
                    throw new Error('Failed to fetch card data');
                }
                const fetchedCardData: ExtendedCard[] = await response.json();

                // Ensure each card has the correct structure
                const processedCardData = fetchedCardData.map(card => ({
                    ...card,
                    chartData: {
                        ...card.chartData,
                        dataPoints: card.chartData.dataPoints || []
                    }
                }));

                setCardData(processedCardData);
            } catch (error) {
                console.error('Error fetching card data:', error);
                setError('Failed to load dashboard data. Please try again later.');
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

    const productTemplate = (card: ExtendedCard) => {
        return (
            <div>
                <ChartCard {...card} />
            </div>
        );
    };

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
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
                                <div key={card.id} className="sm:col-6 md:col-6 lg:col-3">
                                    <ChartCard {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}