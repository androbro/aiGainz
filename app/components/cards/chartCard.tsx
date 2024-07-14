import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import CardSkeleton from '@/app/components/cardSkeleton';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import { ChartData, ExtendedCard } from '@/app/interfaces/types';
import { parseDate } from '@/app/utils/utils';
import { CardHeader } from '@/app/components/cards/components/cardHeader';
import { StatisticsDisplay } from '@/app/components/cards/components/statisticsDisplay';
import { PeriodSelector } from '@/app/components/cards/components/periodSelector';
import { Chart as ChartComponent } from 'primereact/chart'; // Import the actual Chart component

function ChartDisplay({ chartOptions, chartData }: { chartOptions: ExtendedCard['chartData']; chartData: ChartData }) {
    return (
        <ChartComponent
            type="line"
            data={chartData}
            options={{
                plugins: { legend: { display: chartOptions.showLegend } },
                scales: { x: { display: chartOptions.showXAxis }, y: { display: chartOptions.showYAxis } },
                maintainAspectRatio: chartOptions.maintainAspectRatio,
                responsive: chartOptions.responsive
            }}
        />
    );
}

export default function ChartCard(props: ExtendedCard) {
    const [cardInfo, setCardInfo] = useState<ExtendedCard>(props);
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [months, setMonths] = useState<number>(1);
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
                        onChange={(date) => setCardInfo({ ...cardInfo, period: date })}
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