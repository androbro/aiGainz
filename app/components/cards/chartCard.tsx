import React, { useEffect, useState, useCallback } from 'react';
import { Card } from 'primereact/card';
import CardSkeleton from '@/app/components/cardSkeleton';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { ChartData, ExtendedCard } from '@/app/interfaces/types';
import { parseDate } from '@/app/utils/utils';
import { CardHeader } from '@/app/components/cards/components/cardHeader';
import { StatisticsDisplay } from '@/app/components/cards/components/statisticsDisplay';
import { PeriodSelector } from '@/app/components/cards/components/periodSelector';
import { ChartDisplay } from '@/app/components/cards/components/chartDisplay';
import { debounce } from 'lodash';

export default function ChartCard(props: ExtendedCard) {
    const [cardInfo, setCardInfo] = useState<ExtendedCard>(props);
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [months, setMonths] = useState<number>(1);
    const isMobile = useMobileChecker();

    const updateCardData = useCallback(
        debounce(async (newPeriod: Date) => {
            try {
                const url = `/api/card?id=${cardInfo.id}`;
                const newCardInfo: ExtendedCard = { ...cardInfo, period: newPeriod };

                const putResponse = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCardInfo),
                });
                const responseText = await putResponse.text();

                if (!putResponse.ok) {
                    throw new Error(
                        `Failed to update card period: ${putResponse.status} ${responseText}`
                    );
                }
                //update the card with the new period and recalculated data based on the new period and the current date
                fetchCardData(cardInfo.id).then((data) => {
                    setCardInfo((prevCardInfo) => ({ ...prevCardInfo, chartData: data.chartData }));
                });
            } catch (error) {
                setCardInfo((prevCardInfo) => ({ ...prevCardInfo, period: prevCardInfo.period }));
            }
        }, 300),
        [cardInfo.id]
    );

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
        if (cardInfo.chartData && cardInfo.chartData.dataPoints.length > 0) {
            const newChartData: ChartData = {
                labels: cardInfo.chartData.dataPoints.map((dp) =>
                    parseDate(dp.date).toLocaleDateString()
                ),
                datasets: [
                    {
                        label: cardInfo.chartData.label,
                        data: cardInfo.chartData.dataPoints.map((dp) => dp.score),
                        fill: cardInfo.chartData.fill,
                        borderColor: cardInfo.chartData.borderColor || undefined,
                        tension: cardInfo.chartData.tension,
                        pointRadius: cardInfo.chartData.pointRadius,
                    },
                ],
            };
            setChartData(newChartData);
        }
    }, [cardInfo.chartData]);

    const handlePeriodChange = (date: Date | null) => {
        if (date) {
            updateCardData(date);
        }
    };

    if (!chartData) {
        return <CardSkeleton />;
    }

    const lastDataPoint = cardInfo.chartData.dataPoints.at(-1);
    const firstDataPoint = cardInfo.chartData.dataPoints.at(0);

    if (!lastDataPoint || !firstDataPoint) {
        return <CardSkeleton />;
    }

    const percentageChange =
        ((lastDataPoint.score - firstDataPoint.score) / firstDataPoint.score) * 100;

    return (
        <Card>
            <div className="grid">
                <CardHeader title={cardInfo.title} />
                <div className="col-6 flex flex-column justify-content-center">
                    <StatisticsDisplay
                        score={lastDataPoint.score}
                        percentageChange={percentageChange}
                    />
                    <PeriodSelector
                        months={months}
                        period={cardInfo.period}
                        onChange={handlePeriodChange}
                        isMobile={isMobile}
                    />
                </div>
                <div className="col-6">
                    <ChartDisplay chartData={chartData} chartOptions={cardInfo.chartData} />
                </div>
            </div>
        </Card>
    );
}

export const fetchCardData = async (id: number) => {
    const response = await fetch(`/api/card?id=${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch card data');
    }
    return await response.json();
};