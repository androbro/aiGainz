import React, { useEffect, useState, useCallback } from 'react';
import CardSkeleton from '@/app/components/cardSkeleton';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { ChartDataPoint } from '@/app/interfaces/types';
import { parseDate } from '@/app/utils/utils';
import { CardHeader } from '@/app/components/cards/components/cardHeader';
import { StatisticsDisplay } from '@/app/components/cards/components/statisticsDisplay';
import { PeriodSelector } from '@/app/components/cards/components/periodSelector';
import { ChartDisplay } from '@/app/components/cards/components/chartDisplay';
import { debounce } from 'lodash';
import { Card } from 'primereact/card';
import { Card as CardModel } from '@prisma/client';

export function ChartCard(props: CardModel) {
    const [cardInfo, setCardInfo] = useState<CardModel>(props);
    const [chartData, setChartData] = useState<ChartDataPoint[] | null>(null);
    const [months, setMonths] = useState<number>(1);
    const lastDataPoint = chartData?.at(-1);
    const firstDataPoint = chartData?.at(0);
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