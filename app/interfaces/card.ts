import { Nullable } from 'primereact/ts-helpers';
import { Chart } from '@/app/interfaces/chart';
import { ExtendedCard } from '@/app/interfaces/types';

export interface CardInformation {
    id: number;
    title: string;
    period: Nullable<Date>;
    chartData: Chart;
}

export interface CardPropData {
    totalScore: number;
    percentageChange: number;
}

export type CardAdjustmentFunction = (card: ExtendedCard) => Promise<ExtendedCard>;

export interface CardAdjustment {
    title: string;
    adjustmentFunction: CardAdjustmentFunction;
}