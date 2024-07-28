import { Chart } from '@prisma/client';

export interface ExtendedChart extends Chart {
    dataPoints?: { date: Date; score: number }[];
}

export interface CreateChart extends Omit<Chart, 'id'> {}