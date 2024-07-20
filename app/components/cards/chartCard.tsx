import React, { useEffect, useState, useCallback } from 'react';
import CardSkeleton from '@/app/components/cardSkeleton';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { parseDate } from '@/app/utils/utils';
import { CardHeader } from '@/app/components/cards/components/cardHeader';
import { StatisticsDisplay } from '@/app/components/cards/components/statisticsDisplay';
import { PeriodSelector } from '@/app/components/cards/components/periodSelector';
import { ChartDisplay } from '@/app/components/cards/components/chartDisplay';
import { Card } from 'primereact/card';
import { ExtendedCard, ExtendedChart } from '@/app/api/card/interfaces';

export function ChartCard(props: ExtendedCard) {
    const [cardInfo, setCardInfo] = useState<ExtendedCard>(props);
    const [chartData, setChartData] = useState<ExtendedChart | null>(null);
    const [months, setMonths] = useState<number>(1);
    const [firstDataPoint, setFirstDataPoint] = useState<{ date: Date; score: number } | null>(
        null
    );
    const [lastDataPoint, setLastDataPoint] = useState<{ date: Date; score: number } | null>(null);
    const isMobile = useMobileChecker();

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

            if (cardInfo.chart.dataPoints && cardInfo.chart.dataPoints.length > 0) {
                setFirstDataPoint(cardInfo.chart.dataPoints[0]);
                setLastDataPoint(cardInfo.chart.dataPoints[cardInfo.chart.dataPoints.length - 1]);
            }
        }
    }, [cardInfo.chart]);

    const handlePeriodChange = (date: Date | null) => {
        console.log('handle change here');
    };

    if (!lastDataPoint || !firstDataPoint || !chartData) {
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
                    <ChartDisplay chartData={chartData} />
                </div>
            </div>
        </Card>
    );
}