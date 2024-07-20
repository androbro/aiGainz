import React from 'react';
import { Chart } from 'primereact/chart';
import { ExtendedChart } from '@/app/api/card/interfaces';

interface ChartDisplayProps {
    chartData: ExtendedChart;
}

export const ChartDisplay: React.FC<ChartDisplayProps> = ({ chartData }) => {
    const data = {
        labels: chartData.dataPoints?.map((dp) => new Date(dp.date).toLocaleDateString()) || [],
        datasets: [
            {
                label: chartData.label,
                data: chartData.dataPoints?.map((dp) => dp.score) || [],
                fill: chartData.fill,
                borderColor: chartData.borderColor || undefined,
                tension: chartData.tension,
                pointRadius: chartData.pointRadius,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: chartData.showLegend,
            },
        },
        scales: {
            x: {
                display: chartData.showXAxis,
            },
            y: {
                display: chartData.showYAxis,
            },
        },
        maintainAspectRatio: chartData.maintainAspectRatio,
        responsive: chartData.responsive,
    };

    return (
        <Chart
            type="line"
            data={data}
            options={options}
            width={chartData.width?.toString()}
            height={chartData.height?.toString()}
        />
    );
};