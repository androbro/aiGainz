import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';

export interface smallStatsCardProps {
    title: string;
    data: smallStatsCardData;
}

interface smallStatsCardData {
    prevScore: number;
    currentScore: number;
}

export default function SmallStatsCard({ title, data }: smallStatsCardProps) {
    const [difference, setDifference] = useState<number>(0);
    const isPositive = data.currentScore >= data.prevScore;
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4,
                },
            ],
        };
        const options = {
            plugins: {
                legend: { display: false },
            },
            scales: {
                x: { display: false },
                y: { display: false },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    useEffect(() => {
        //calculate diff in percentage and if negative, make positive
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
                <div className="align-content-center col-6">
                    <div className="font-bold black text-4xl">{data.currentScore}KG</div>
                    <div>
                        <div className={`${isPositive ? 'text-green-500' : 'text-red-500'} mt-2 flex`}>
                            <div>{isPositive ? '+' : '-'}</div>
                            <div>{difference}</div>
                            <div>%</div>
                            <div>{isPositive ? <i className="pi pi-arrow-up"></i> : <i className="pi pi-arrow-down"></i>}</div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <Chart type="line" data={chartData} options={chartOptions} />
                </div>
            </div>
        </Card>
    );
}
