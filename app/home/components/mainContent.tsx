import React, { useEffect, useState } from 'react';
import { ChartCard } from '@/app/components/cards/chartCard';
import { useCards } from '@/hooks/useCards';
import { ExtendedCard } from '@/app/api/card/interfaces';
import { NaturalLanguagePeriodPicker } from '@/app/components/naturalLanguagePeriodPicker';
import { CardApi } from '@/app/api/card/api';

export default function MainContent() {
    const {
        createCard,
        cards: initialCards,
        createdCard,
        updateCards,
        updatedCards,
        refetchCards,
    } = useCards({});
    const [cards, setCards] = useState<ExtendedCard[]>([]);
    const [pickedDate, setPickedDate] = useState<Date | null>(null);
    const [generatedPeriod, setGeneratedPeriod] = useState<Date | null>(null);

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

    useEffect(() => {
        refetchCards();
    }, [updatedCards]);

    const handleDeleteCard = (id: number) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };

    const updateCardsWithNewPeriod = async () => {
        if (generatedPeriod) {
            try {
                const newCards: ExtendedCard[] = cards.map((card) => ({
                    ...card,
                    period: generatedPeriod,
                }));
                setCards(newCards);
                updateCards({ cards: newCards });
                // await CardApi.updateCards(cards);
                setPickedDate(generatedPeriod);
            } catch (error) {
                console.error('Failed to update cards:', error);
                // Optionally, revert the state or show an error message
            }
        }
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
                        initialDate={pickedDate || undefined}
                        onChange={setGeneratedPeriod}
                        onSearch={updateCardsWithNewPeriod}
                    />
                    {generatedPeriod && (
                        <span className="text-sm">
                            {generatedPeriod.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                    )}
                </div>
            </div>
            <section className="flex-column w-full" style={{ minHeight: '400px' }}>
                <div className="grid m-4">{cards.map(renderCard)}</div>
            </section>
        </div>
    );
}