import React from 'react';
import { Chart as ChartComponent } from 'primereact/chart';
import { ChartData, ExtendedCard } from '@/app/interfaces/types';
import { Chart } from '@prisma/client';

export type ChartDisplayProps = {
    chartData: ChartData;
    chartOptions: Chart;
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
            // width="75px"
            // height="100%"
        />
    </div>
);
