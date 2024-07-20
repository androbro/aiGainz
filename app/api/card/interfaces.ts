import { Card, ChartDataPoint } from '@prisma/client';

export interface ExtendedCard extends Card {
    chartData?: ChartDataPoint[];
}