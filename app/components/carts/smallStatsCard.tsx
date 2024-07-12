import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { useResizeObserver } from '@/hooks/useResizeObserver';

export interface SmallStatsCardProps {
    title: string;
    data: SmallStatsCardData;
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

interface SmallStatsCardData {
    prevScore: number;
    currentScore: number;
}

export default function SmallStatsCard({ title, data, chartsData, labels }: SmallStatsCardProps) {
    const [difference, setDifference] = useState<number>(0);
    const isPositive = data.currentScore >= data.prevScore;
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const chartContainerRef = useRef(null);
    const { width, height } = useResizeObserver(chartContainerRef);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        chartsData.borderColor = isPositive
            ? documentStyle.getPropertyValue('--green-500')
            : documentStyle.getPropertyValue('--red-500');

        const data = {
            labels: labels,
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

        setChartData(data);
        setChartOptions(options);
    }, [chartsData, isPositive]);

    useEffect(() => {
        if (data.prevScore > 0) {
            const diff = (data.currentScore - data.prevScore) / data.prevScore;
            const diffPercentage = Math.abs(diff) * 100;
            setDifference(diffPercentage);
        }
    }, [data.currentScore, data.prevScore]);

    const Header = <div className="pt-4 pl-4 font-bold black">{title}</div>;

    return (
        <Card header={Header}>
            <div className="grid">
                <div className="align-content-center col-6 pb-0 pt-0">
                    <div className="font-bold black text-4xl">{data.currentScore}KG</div>
                    <div>
                        <div
                            className={`${isPositive ? 'text-green-500' : 'text-red-500'} mt-2 flex`}
                        >
                            <div>{isPositive ? '+' : '-'}</div>
                            <div>{difference.toFixed(2)}</div>
                            <div>%</div>
                            <div>
                                {isPositive ? (
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
    );
}
