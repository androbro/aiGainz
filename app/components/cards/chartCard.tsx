import React, { useEffect, useState } from 'react';
import CardSkeleton from '@/app/components/cardSkeleton';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { parseDate } from '@/app/utils/utils';
import { CardHeader } from '@/app/components/cards/components/cardHeader';
import { StatisticsDisplay } from '@/app/components/cards/components/statisticsDisplay';
import { PeriodSelector } from '@/app/components/cards/components/periodSelector';
import { ChartDisplay } from '@/app/components/cards/components/chartDisplay';
import { Card } from 'primereact/card';
import { ExtendedCard } from '@/app/api/card/interfaces';
import { useCards } from '@/hooks/useCards';
import { ExtendedChart } from '@/app/api/chart/interfaces';
import { CustomContextMenu } from '@/app/components/customContextMenu';

interface ChartCardProps {
    card: ExtendedCard;
    onDelete: (id: number) => void;
}

export function ChartCard({ card, onDelete }: ChartCardProps) {
    const [cardInfo, setCardInfo] = useState<ExtendedCard>(card);
    const [chartData, setChartData] = useState<ExtendedChart | null>(null);
    const [months, setMonths] = useState<number>(1);
    const [lastDataPoint, setLastDataPoint] = useState<{ date: Date; score: number } | null>(null);
    const [percentageChange, setPercentageChange] = useState<number>(0);
    const isMobile = useMobileChecker();

    const { updateCard, updatedCard, deleteCard } = useCards({});

    useEffect(() => {
        if (updatedCard && updatedCard.id === cardInfo.id) {
            setCardInfo(updatedCard);
        }
    }, [updatedCard]);

    useEffect(() => {
        if (cardInfo.period) {
            const current = new Date();
            const cardPeriod = parseDate(cardInfo.period);
            const monthsDiff =
                (cardPeriod.getFullYear() - current.getFullYear()) * 12 +
                cardPeriod.getMonth() -
                current.getMonth();
            setMonths(Math.abs(monthsDiff));
        }
    }, [cardInfo.period]);

    useEffect(() => {
        if (cardInfo.chart) {
            setChartData(cardInfo.chart);

            if (!(cardInfo.chart.dataPoints && cardInfo.chart.dataPoints.length > 0)) {
                return;
            }
            const firstDataPoint = cardInfo.chart.dataPoints.at(0);
            const lastDataPoint = cardInfo.chart.dataPoints.at(-1);
            if (!firstDataPoint || !lastDataPoint) {
                return;
            }
            setLastDataPoint(lastDataPoint);
            setPercentageChange(
                ((lastDataPoint.score - firstDataPoint.score) / firstDataPoint.score) * 100 || 0
            );
        }
    }, [cardInfo.chart]);

    const handlePeriodChange = (date: Date | null) => {
        if (date) {
            setCardInfo((prevCardInfo) => ({ ...prevCardInfo, period: date }));
            updateCard({ id: cardInfo.id.toString(), data: { ...cardInfo, period: date } });
        }
    };

    const handleRename = (newName: string) => {
        setCardInfo((prevCardInfo) => ({ ...prevCardInfo, title: newName }));
        updateCard({ id: cardInfo.id.toString(), data: { ...cardInfo, title: newName } });
    };

    const handleDelete = () => {
        deleteCard(cardInfo.id.toString());
        //optimistically remove card
        onDelete(cardInfo.id);
    };

    if (!chartData) {
        return <CardSkeleton />;
    }

    const gradientStyle = getGradientStyle(card.id);

    return (
        <CustomContextMenu onRename={handleRename} onDelete={handleDelete}>
            <div
                className="border-round-3xl text-white"
                style={{
                    ...gradientStyle,
                }}
            >
                <div className="grid">
                    <div className="col-12 p-3 pb-0 mt-1">
                        <CardHeader title={cardInfo.title} />
                    </div>
                    <div className="col-6 align-self-end p-3 pt-5">
                        <StatisticsDisplay
                            score={lastDataPoint ? lastDataPoint.score : 0}
                            percentageChange={percentageChange}
                        />
                    </div>
                    <div className="col-6">
                        <ChartDisplay chartData={chartData} />
                    </div>
                </div>
            </div>
        </CustomContextMenu>
    );
}

function getGradientStyle(id: number): React.CSSProperties {
    const gradients = [
        { from: 'rgb(255, 128, 8)', to: 'rgb(255, 200, 55)' }, // Orange to Yellow
        { from: 'rgb(33, 147, 176)', to: 'rgb(109, 213, 237)' }, // Blue to Cyan
        { from: 'rgb(6, 190, 182)', to: 'rgb(72, 177, 191)' }, // Cyan to Teal
    ];
    const { from, to } = gradients[id % gradients.length];

    // Extract the RGB values from the 'from' color
    const matches = from.match(/\d+/g);
    if (!matches || matches.length !== 3) {
        console.error('Invalid color format');
        return {};
    }

    const [r, g, b] = matches.map(Number);

    return {
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        boxShadow: `0 4px 10px rgba(${r}, ${g}, ${b}, 0.5)`,
    };
}