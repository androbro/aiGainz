'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Carousel } from 'primereact/carousel';
import { useLoaderStore } from '@/app/store/loaderStore';
import { useLoading } from '@/hooks/useLoading';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import ChartCard from '@/app/components/cards/chartCard';
import { ExtendedCard } from '@/app/interfaces/types';
import AddCardButton from '@/app/components/addCardButton';

type ResponsiveOption = {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
};

const responsiveOptions: ResponsiveOption[] = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
];

export default function Dashboard() {
    const { setIsLoading } = useLoaderStore();
    const isMobile = useMobileChecker();
    useLoading(false, setIsLoading);
    const [cardData, setCardData] = useState<ExtendedCard[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchCardData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/card');
            if (!response.ok) {
                throw new Error('Failed to fetch card data');
            }
            const fetchedCardData: ExtendedCard[] = await response.json();

            const processedCardData = fetchedCardData.map((card) => ({
                ...card,
                chartData: {
                    ...card.chartData,
                    dataPoints: card.chartData.dataPoints || [],
                },
            }));

            setCardData(processedCardData);
        } catch (error) {
            console.error('Error fetching card data:', error);
            setError('Failed to load dashboard data. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }, [setIsLoading]);

    useEffect(() => {
        fetchCardData();
    }, [fetchCardData]);

    const handleAddCard = async (newCardData: any) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/card', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCardData),
            });

            if (!response.ok) {
                throw new Error('Failed to add new card');
            }

            const addedCard = await response.json();
            setCardData((prevCards) => [...prevCards, addedCard]);
        } catch (error) {
            console.error('Error adding new card:', error);
            setError('Failed to add new card. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const renderCard = (card: ExtendedCard) => (
        <div key={card.id} className="sm:col-6 md:col-6 lg:col-3 p-2">
            <ChartCard {...card} />
        </div>
    );
    
    const renderAddButton = () => (
        <div className="sm:col-6 md:col-6 lg:col-3 p-2">
            <AddCardButton onCardAdd={handleAddCard} />
        </div>
    );

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="layout-container layout-light layout-colorscheme-menu layout-static layout-static-inactive p-ripple-disabled">
            {isMobile ? (
                <Carousel
                    value={[...cardData.map(renderCard), renderAddButton()]}
                    numVisible={1}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={(item) => item}
                />
            ) : (
                <div className="xl:center-horizontally flex">
                    <div className="w-full xl:max-w-110rem px-4">
                        <div className="flex flex-wrap justify-content-start">
                            {cardData.map(renderCard)}
                            {renderAddButton()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}