'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';

export interface smallStatsCardProps {
    title: string;
    data: smallStatsCardData;
    chartsData: ChartData;
}

export interface ChartData {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string | undefined;
    tension: number;
    pointRadius: number;
}

interface smallStatsCardData {
    prevScore: number;
    currentScore: number;
}

export default function SmallStatsCard({ title, data, chartsData }: smallStatsCardProps) {
    const [difference, setDifference] = useState<number>(0);
    const isPositive = data.currentScore >= data.prevScore;
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const chartRef = useRef<any | null>(null);

    const updateChartSize = () => {
        if (chartRef.current && typeof chartRef.current.resize === 'function') {
            chartRef.current.resize();
        }
    };

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        chartsData.borderColor = isPositive
            ? documentStyle.getPropertyValue('--green-500')
            : documentStyle.getPropertyValue('--red-500');

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
            maintainAspectRatio: false, // Ensure the chart is responsive
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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateChartSize);
            return () => {
                window.removeEventListener('resize', updateChartSize);
            };
        }
    }, []);

    const Header = <div className="pt-4 pl-4 font-bold black">{title}</div>;
    ``;

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
                            <div>{difference}</div>
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
                <div className="col-6">
                    <Chart
                        height="3rem"
                        ref={chartRef}
                        type="line"
                        data={chartData}
                        options={chartOptions}
                    />
                </div>
            </div>
        </Card>
    );
}
