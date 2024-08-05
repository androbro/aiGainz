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

    return (
        <CustomContextMenu onRename={handleRename} onDelete={handleDelete}>
            <div className="bg-green-400 border-round-3xl">
                <div className="grid p-3">
                    <div className="col-12 ">
                        <CardHeader title={cardInfo.title} />
                    </div>
                    <div className="col-6 flex flex-column justify-content-center">
                        <StatisticsDisplay
                            score={lastDataPoint ? lastDataPoint.score : 0}
                            percentageChange={percentageChange}
                        />
                        {/*<PeriodSelector*/}
                        {/*    months={months}*/}
                        {/*    period={cardInfo.period}*/}
                        {/*    onChange={handlePeriodChange}*/}
                        {/*    isMobile={isMobile}*/}
                        {/*/>*/}
                    </div>
                    <div className="col-6">
                        <ChartDisplay chartData={chartData} />
                    </div>
                </div>
            </div>
        </CustomContextMenu>
    );
}