import { Card, Chart, ChartDataPoint } from '@prisma/client';

// Only extend types if absolutely necessary
export type ExtendedCard = Card & {
    chartData: Chart & {
        dataPoints: ChartDataPoint[];
    };
};

export interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        fill: boolean;
        borderColor: string | undefined;
        tension: number;
        pointRadius: number;
    }[];
}
