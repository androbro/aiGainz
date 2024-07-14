import { Nullable } from 'primereact/ts-helpers';
import { Chart } from '@/app/interfaces/chart';

export interface CardInformation {
    id: number;
    title: string;
    data: CardPropData;
    chart: Chart;
    period: Nullable<Date>;
}

export interface CardPropData {
    totalScore: number;
    dataPoints: { date: Date; score: number }[];
    percentageChange: number;
    width?: number;
    height?: number;
}

export interface CalculationFunction {
    (params: any): Promise<CardPropData>;
}

export interface CardType {
    id: string;
    title: string;
    calculationFunction: CalculationFunction;
    chartSettings: Omit<Chart, 'data' | 'label'>;
}
