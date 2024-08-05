'use client';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { ChartCard } from '@/app/components/cards/chartCard';
import AddCardButton from '@/app/components/addCardButton';
import { useCards } from '@/hooks/useCards';
import { ExtendedCard } from '@/app/api/card/interfaces';

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

export default function MainContent() {
    const isMobile = useMobileChecker();
    const { createCard, cards: initialCards, createdCard } = useCards({});
    const [cards, setCards] = useState<ExtendedCard[]>([]);

    useEffect(() => {
        if (initialCards) {
            setCards(initialCards);
        }
    }, [initialCards.length]);

    useEffect(() => {
        if (createdCard) {
            setCards((prevCards) => [...prevCards, createdCard]);
        }
    }, [createdCard]);

    const handleDeleteCard = (id: number) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };

    const renderCard = (card: ExtendedCard) => (
        <div key={card.id} className="col-12 sm:col-6 lg:col-4 xl:col-3 p-2">
            <ChartCard card={card} onDelete={handleDeleteCard} />
        </div>
    );

    const renderAddButton = () => (
        <div className="sm:col-6 md:col-6 lg:col-3 p-2">
            <AddCardButton onCardAdd={createCard} />
        </div>
    );

    return (
        <section className="flex flex-column w-full">
            <div className="surface-0 border-round-2xl" style={{ minHeight: '400px' }}>
                <div className="layout-container layout-light layout-colorscheme-menu layout-static layout-static-inactive p-ripple-disabled">
                    <div className="xl:center-horizontally flex">
                        <div className="w-full xl:max-w-110rem px-4">
                            <div className="flex flex-wrap justify-content-between">
                                {cards.map(renderCard)}
                                {/*{renderAddButton()}*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}