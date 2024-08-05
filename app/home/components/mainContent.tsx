import React, { useEffect, useState } from 'react';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { ChartCard } from '@/app/components/cards/chartCard';
import AddCardButton from '@/app/components/addCardButton';
import { useCards } from '@/hooks/useCards';
import { ExtendedCard } from '@/app/api/card/interfaces';

export default function MainContent() {
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
        <div className="col-12 md:col-12 lg:col-4" key={card.id}>
            <ChartCard card={card} onDelete={handleDeleteCard} />
        </div>
    );

    return (
        <div className="flex flex-column w-full surface-0 border-round-3xl ">
            <div className="flex gap-3 m-4 p-2 mb-0 pb-0">
                <div className="text-2xl" style={{ fontWeight: 500 }}>
                    Home
                </div>
                <div>Dropdown</div>
            </div>
            <section className="flex-column w-full" style={{ minHeight: '400px' }}>
                <div className="grid m-4">
                    {cards.map(renderCard)}
                    {/*{renderAddButton()}*/}
                </div>
            </section>
        </div>
    );
}