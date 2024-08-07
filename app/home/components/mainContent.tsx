import React, { useEffect, useState } from 'react';
import { ChartCard } from '@/app/components/cards/chartCard';
import { useCards } from '@/hooks/useCards';
import { ExtendedCard } from '@/app/api/card/interfaces';
import CustomDropdown from '@/app/components/formElements/customDropdown';
import { settingsApi } from '@/app/api/globalSettings/api';

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
    const [selectedDays, setSelectedDays] = useState<number>(30); // Default to 30 days
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
        setPeriod();
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

    const setPeriod = async () => {
        const period = await settingsApi.getSettingByName('period');
        if (period) {
            const parsedValue = parseInt(period.value);
            if (!parsedValue) {
                return;
            }
            setSelectedDays(parsedValue);
            console.log('Selected days:', parsedValue);
        }
    };

    // const saveSelectedDays = async (days: number) => {
    //     try {
    //         await fetch('/api/globalSettings', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ value: days }),
    //         });
    //     } catch (error) {
    //         console.error('Failed to save selected days:', error);
    //     }
    // };

    const handleDeleteCard = (id: number) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };

    const updateCardsWithNewPeriod = async () => {
        try {
            const date = new Date();
            date.setDate(date.getDate() - selectedDays);
            const newCards: ExtendedCard[] = cards.map((card) => ({
                ...card,
                period: date,
            }));
            setCards(newCards);
            updateCards({ cards: newCards });
        } catch (error) {
            console.error('Failed to update cards:', error);
        }
    };

    const handlePeriodChange = (days: number) => {
        setSelectedDays(days);
        updateCardsWithNewPeriod();
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
                        onChange={handlePeriodChange}
                        initialDays={selectedDays}
                    />
                </div>
                <div className="text-sm mt-3 text-400" style={{ fontWeight: 500 }}>
                    <div>Showing data for the last {selectedDays} days</div>
                </div>
            </div>
            <section className="flex-column w-full" style={{ minHeight: '400px' }}>
                <div className="grid m-4 mt-0">{cards.map(renderCard)}</div>
            </section>
        </div>
    );
}