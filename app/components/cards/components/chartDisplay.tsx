import React from 'react';
import { Chart as ChartComponent } from 'primereact/chart';
import { ChartData, ExtendedCard } from '@/app/interfaces/types';
import { Chart } from '@prisma/client';

export type ChartDisplayProps = {
    chartData: ChartData;
    chartOptions: Chart;
};

export const ChartDisplay: React.FC<ChartDisplayProps> = ({ chartData, chartOptions }) => (
    <div>
        <ChartComponent
            type="line"
            data={chartData}
            options={{
                plugins: {
                    legend: {
                        // display: chartOptions.showLegend,
                        display: false,
                    },
                },
                scales: {
                    x: {
                        // display: chartOptions.showXAxis,
                        display: false,
                    },
                    y: {
                        // display: chartOptions.showYAxis,
                        display: false,
                    },
                },
                // maintainAspectRatio: chartOptions.maintainAspectRatio,
                // responsive: chartOptions.responsive,
                maintainAspectRatio: false,
                responsive: true,
            }}
            // width={`${chartOptions.width}px`}
            // height={`${chartOptions.height}px`}
            width="100%"
            height="100%"
        />
    </div>
);
