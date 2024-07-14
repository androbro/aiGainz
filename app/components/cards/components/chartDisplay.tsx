import React from 'react';
import { Chart as ChartComponent } from 'primereact/chart';
import { ChartData, ExtendedChart } from '@/app/interfaces/types';

export type ChartDisplayProps = {
    chartData: ChartData;
    chartOptions: ExtendedChart;
};

export const ChartDisplay: React.FC<ChartDisplayProps> = ({ chartData, chartOptions }) => (
    <div style={{ height: `${chartOptions.height || 200}px` }}>
        <ChartComponent
            type="line"
            data={chartData}
            options={{
                plugins: {
                    legend: {
                        display: chartOptions.showLegend,
                    },
                },
                scales: {
                    x: {
                        display: chartOptions.showXAxis,
                    },
                    y: {
                        display: chartOptions.showYAxis,
                    },
                },
                maintainAspectRatio: chartOptions.maintainAspectRatio,
                responsive: chartOptions.responsive,
            }}
            width="100%"
            height="100%"
        />
    </div>
);
