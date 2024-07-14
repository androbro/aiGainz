import { Nullable } from 'primereact/ts-helpers';
import { Chart } from '@/app/interfaces/chart';

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

export interface CalculationFunction {
    (params: any): Promise<CardPropData>;
}

export interface CardType {
    id: string;
    title: string;
    calculationFunction: CalculationFunction;
    chartSettings: Omit<Chart, 'dataPoints' | 'label'>;
}