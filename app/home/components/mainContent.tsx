import React, { useEffect, useState } from 'react';
import { ChartCard } from '@/app/components/cards/chartCard';
import { useCards } from '@/hooks/useCards';
import { ExtendedCard } from '@/app/api/card/interfaces';
import { NaturalLanguagePeriodPicker } from '@/app/components/naturalLanguagePeriodPicker';
import { CardApi } from '@/app/api/card/api';
import CustomDropdown from '@/app/components/formElements/customDropdown';

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
    const options = [
        { label: 'Last 7 days', value: 7 },
        { label: 'Last 14 days', value: 14 },
        { label: 'Last month', value: 30 },
        { label: 'Last 3 months', value: 90 },
        { label: 'Last 6 months', value: 180 },
        { label: 'Last year', value: 365 },
        { label: 'All time', value: 0 },
    ];

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
            <div className="flex align-items-start m-4 mb-2 p-2 flex-column">
                <div className="flex align-items-center gap-4">
                    <div className="text-2xl" style={{ fontWeight: 600 }}>
                        Home
                    </div>
                    <CustomDropdown options={options} onChange={setPickedDate} />
                    {/*<NaturalLanguagePeriodPicker*/}
                    {/*    initialDate={pickedDate || undefined}*/}
                    {/*    onChange={setGeneratedPeriod}*/}
                    {/*    onSearch={updateCardsWithNewPeriod}*/}
                    {/*/>*/}
                    {/*{generatedPeriod && (*/}
                    {/*    <span className="text-sm">*/}
                    {/*        {generatedPeriod.toLocaleDateString('en-US', {*/}
                    {/*            year: 'numeric',*/}
                    {/*            month: 'long',*/}
                    {/*            day: 'numeric',*/}
                    {/*        })}*/}
                    {/*    </span>*/}
                    {/*)}*/}
                </div>
                <div className="text-sm mt-3 text-400" style={{ fontWeight: 500 }}>
                    <div>
                        This is a title that should be small {pickedDate?.toLocaleDateString()}
                    </div>
                </div>
            </div>
            <section className="flex-column w-full" style={{ minHeight: '400px' }}>
                <div className="grid m-4 mt-0">{cards.map(renderCard)}</div>
            </section>
        </div>
    );
}