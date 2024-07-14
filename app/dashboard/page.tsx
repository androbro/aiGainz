'use client';
import { useLoaderStore } from '@/app/store/loaderStore';
import { useLoading } from '@/hooks/useLoading';
import React, { useCallback, useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { CardInformation } from '@/app/interfaces/card';
import SmallStatsCard from '@/app/components/cards/chartCard';
import { cardTypes } from '@/app/mappers/cardTypeMap';

export default function Dashboard() {
    const { setIsLoading } = useLoaderStore();
    const isMobile = useMobileChecker();
    useLoading(false, setIsLoading);
    const [cardData, setCardData] = useState<CardInformation[]>([]);

    const calculateDataForCards = async (
        cardConfigs: CardInformation[]
    ): Promise<CardInformation[]> => {
        const calculatedCards = await Promise.all(
            cardConfigs.map(async (config: CardInformation) => {
                const cardType = cardTypes[config.title];
                if (!cardType) {
                    console.error(`Unknown card type: ${config.title}`);
                    return null;
                }
                try {
                    const data = await cardType.calculationFunction(config.period);
                    return {
                        title: config.title || cardType.title,
                        data,
                        chart: {
                            ...cardType.chartSettings,
                            label: config.title || cardType.title,
                            data: data.dataPoints.map((dataPoint) => dataPoint.score),
                        },
                        period: config.period,
                    };
                } catch (error) {
                    console.error(`Error calculating data for card ${config.title}:`, error);
                    return null;
                }
            })
        );

        return calculatedCards.filter((card): card is CardInformation => card !== null);
    };

    useEffect(() => {
        async function fetchCardData() {
            setIsLoading(true);
            try {
                // Fetch card configurations from the database
                const response = await fetch('/api/card');
                const cardConfigs = await response.json();

                // Calculate data for each card
                const calculatedCardData = await calculateDataForCards(cardConfigs);

                // Update state with calculated card data
                setCardData(calculatedCardData);
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
                                            data={card.data}
                                            chart={card.chart}
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
