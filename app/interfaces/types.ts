// types.ts
import { Card as PrismaCard, Chart as PrismaChart } from '@prisma/client';

export interface FlexibleChartDataPoint {
    id: number;
    date: string | Date;
    score: number;
    chartId: number;
}

export interface ExtendedChart extends Omit<PrismaChart, 'dataPoints'> {
    dataPoints: FlexibleChartDataPoint[];
}

export interface ExtendedCard extends Omit<PrismaCard, 'chartData'> {
    chartData: ExtendedChart;
}

export interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        fill: boolean;
        borderColor: string | undefined; // Keep this as string | undefined
        tension: number;
        pointRadius: number;
    }[];
}
