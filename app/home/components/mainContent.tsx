import React, { useEffect, useState } from 'react';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { ChartCard } from '@/app/components/cards/chartCard';
import AddCardButton from '@/app/components/addCardButton';
import { useCards } from '@/hooks/useCards';
import { ExtendedCard } from '@/app/api/card/interfaces';

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
        <div key={card.id}>
            <ChartCard card={card} onDelete={handleDeleteCard} />
        </div>
    );

    return (
        <section className="flex flex-col w-full">
            <div className="surface-0 border-round-2xl w-full" style={{ minHeight: '400px' }}>
                <div className="w-full  px-4">
                    <div className="flex flex-row gap-4 justify-between">
                        {cards.map(renderCard)}
                        {/*{renderAddButton()}*/}
                    </div>
                </div>
            </div>
        </section>
    );
}