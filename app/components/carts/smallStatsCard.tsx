import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { useResizeObserver } from '@/hooks/useResizeObserver';
import { StrengthScoreResult } from '@/hooks/useStrengthScore';
import CardSkeleton from '@/app/components/cardSkeleton';

export interface SmallStatsCardProps {
    title: string;
    data: StrengthScoreResult;
    chartsData: ChartData;
    labels: string[];
}

export interface ChartData {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string | undefined;
    tension: number;
    pointRadius: number;
}

export default function SmallStatsCard({ title, data, chartsData, labels }: SmallStatsCardProps) {
    const [difference, setDifference] = useState<number>(0);
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const chartContainerRef = useRef(null);
    const { width, height } = useResizeObserver(chartContainerRef);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        if (data) {
            chartsData.borderColor =
                data.percentageChange >= 0
                    ? documentStyle.getPropertyValue('--green-500')
                    : documentStyle.getPropertyValue('--red-500');

            const chartData = {
                labels: data.dataPoints,
                datasets: [chartsData],
            };

            const options = {
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    x: { display: false },
                    y: { display: false },
                },
                maintainAspectRatio: false,
                responsive: true,
            };

            setChartData(chartData);
            setChartOptions(options);
        }
    }, [chartsData]);

    const Header = <div className="pt-4 pl-4 font-bold black">{title}</div>;

    return (
        <>
            {data ? (
                <Card header={Header}>
                    <div className="grid">
                        <div className="align-content-center col-6 pb-0 pt-0">
                            <div className="font-bold black text-4xl">
                                {data?.totalScore.toFixed(0)}
                            </div>
                            <div>
                                <div
                                    className={`${data?.percentageChange >= 0 ? 'text-green-500' : 'text-red-500'} mt-2 flex`}
                                >
                                    <div>{data?.percentageChange >= 0 ? '+' : '-'}</div>
                                    <div>{data?.percentageChange.toFixed(0)}</div>
                                    <div>%</div>
                                    <div>
                                        {data?.percentageChange >= 0 ? (
                                            <i className="pi pi-arrow-up"></i>
                                        ) : (
                                            <i className="pi pi-arrow-down"></i>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" ref={chartContainerRef} style={{ height: '75px' }}>
                            <Chart
                                type="line"
                                data={chartData}
                                options={chartOptions}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </Card>
            ) : (
                <CardSkeleton />
            )}
        </>
    );
}
