import { Card, Chart } from '@prisma/client';

export interface ExtendedCard extends Card {
    chart?: ExtendedChart;
}

export interface ExtendedChart extends Chart {
    dataPoints?: { date: Date; score: number }[];
}