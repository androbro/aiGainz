import React, { useEffect, useState } from 'react';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { ChartCard } from '@/app/components/cards/chartCard';
import AddCardButton from '@/app/components/addCardButton';
import { useCards } from '@/hooks/useCards';
import { ExtendedCard } from '@/app/api/card/interfaces';
import { NaturalLanguagePeriodPicker } from '@/app/components/naturalLanguagePeriodPicker';

export default function MainContent() {
    const { createCard, cards: initialCards, createdCard } = useCards({});
    const [cards, setCards] = useState<ExtendedCard[]>([]);
    const [pickedDate, setPickedDate] = useState<Date | null>(null);

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

    const updateCardsWithNewPeriod = (date: Date) => {
        //update cards with new period
    };

    const renderCard = (card: ExtendedCard) => (
        <div className="col-12 md:col-12 lg:col-4" key={card.id}>
            <ChartCard card={card} onDelete={handleDeleteCard} />
        </div>
    );

    return (
        <div className="flex flex-column w-full surface-0 border-round-3xl">
            <div className="flex align-items-center m-4 p-2 gap-4">
                <div className="text-2xl font-medium">Home</div>
                <div className="flex align-items-center gap-3">
                    <NaturalLanguagePeriodPicker
                        onChange={setPickedDate}
                        initialDate={pickedDate!}
                        onSearch={updateCardsWithNewPeriod}
                    />
                    {pickedDate && (
                        <span className="text-sm">
                            {pickedDate.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                    )}
                </div>
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