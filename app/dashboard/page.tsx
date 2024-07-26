'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { ChartCard } from '@/app/components/cards/chartCard';
import AddCardButton from '@/app/components/addCardButton';
import { Card as CardModel } from '@prisma/client';
import { useCards } from '@/hooks/useCards';
import { CreateCard } from '@/app/api/card/interfaces';

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
    const isMobile = useMobileChecker();
    const { createCard, cards, createdCard } = useCards({});

    const handleAddCard = useCallback((newCard: CreateCard) => {
        createCard(newCard);
    }, []);

    useEffect(() => {
        if (createdCard) {
            //add card to the list
            cards.push(createdCard);
        }
    }, [createdCard]);

    const renderCard = (card: CardModel) => (
        <div key={card.id} className="sm:col-6 md:col-6 lg:col-3 p-2">
            <ChartCard {...card} />
        </div>
    );

    const renderAddButton = () => (
        <div className="sm:col-6 md:col-6 lg:col-3 p-2">
            <AddCardButton onCardAdd={(card) => handleAddCard(card)} />
        </div>
    );

    return (
        <div className="layout-container layout-light layout-colorscheme-menu layout-static layout-static-inactive p-ripple-disabled">
            {isMobile ? (
                <Carousel
                    value={[...cards!.map(renderCard), renderAddButton()]}
                    numVisible={1}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={(item) => item}
                />
            ) : (
                <div className="xl:center-horizontally flex">
                    <div className="w-full xl:max-w-110rem px-4">
                        <div className="flex flex-wrap justify-content-start">
                            {cards!.map(renderCard)}
                            {renderAddButton()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}