import { Chart } from '@prisma/client';

export interface ExtendedChart extends Chart {
    dataPoints?: { date: Date; score: number }[];
}