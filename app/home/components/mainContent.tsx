import React, { useEffect, useState } from 'react';
import { ChartCard } from '@/app/components/cards/chartCard';
import { useCards } from '@/hooks/useCards';
import { ExtendedCard } from '@/app/api/card/interfaces';
import CustomDropdown from '@/app/components/formElements/customDropdown';
import { useSettings } from '@/hooks/useSettings';

export default function MainContent() {
    const { cards: initialCards, updateCards, refetchCards, updatedCards } = useCards({});
    const { periodSetting, updateSetting } = useSettings({});
    const [period, setPeriod] = useState<number>(30);
    const [cards, setCards] = useState<ExtendedCard[]>([]);
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
        if (updatedCards) {
            setCards(updatedCards);
        }
    }, [updatedCards]);

    useEffect(() => {
        if (initialCards.length > 0) {
            setCards(initialCards);
        }
    }, [initialCards.length]);

    useEffect(() => {
        if (periodSetting) {
            setPeriod(parseInt(periodSetting.value));
        }
    }, [periodSetting]);

    const handleDeleteCard = (id: number) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };

    const updateCardsWithNewPeriod = async (days: number) => {
        try {
            const date = new Date();
            date.setDate(date.getDate() - days);
            const newCards: ExtendedCard[] = cards.map((card) => ({
                ...card,
                period: date,
            }));
            updateCards({ cards: newCards });
            if (periodSetting) {
                updateSetting({ data: { ...periodSetting, value: days.toString() } });
                setPeriod(days);
            }
            await refetchCards();
        } catch (error) {
            console.error('Failed to update cards:', error);
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
                    <CustomDropdown
                        options={options}
                        onChange={updateCardsWithNewPeriod}
                        initialDays={period}
                    />
                </div>
                <div className="text-sm mt-3 text-400" style={{ fontWeight: 500 }}>
                    <div>Showing data for the last {period} days</div>
                </div>
            </div>
            <section className="flex-column w-full" style={{ minHeight: '400px' }}>
                <div className="grid m-4 mt-0">{cards.map(renderCard)}</div>
            </section>
        </div>
    );
}