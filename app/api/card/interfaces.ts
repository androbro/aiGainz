import { Card, Chart } from '@prisma/client';
import { ExtendedChart } from '@/app/api/chart/interfaces';

export interface ExtendedCard extends Card {
    chart?: ExtendedChart;
}
export interface CreateCard {
    title: string;
    period: Date | null;
    chart?: ExtendedChart;
}