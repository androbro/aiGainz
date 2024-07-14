import { Card, Chart } from '@prisma/client';
import { calculateStrengthScore } from '@/app/functions/strengthScore';

type CardCalculationResult = {
    totalScore: number;
    percentageChange: number;
};

type CardType = {
    id: string;
    title: string;
    calculationFunction: (params: any) => Promise<CardCalculationResult>;
    chartSettings: Omit<Chart, 'id' | 'label' | 'dataPoints'>;
};

export const cardTypes: Record<string, CardType> = {
    'Overall Strength': {
        id: 'overall-strength',
        title: 'Overall Strength',
        calculationFunction: async (params): Promise<CardCalculationResult> => {
            try {
                const result = await calculateStrengthScore(params);
                if (result === null) {
                    return {
                        totalScore: 0,
                        percentageChange: 0,
                    };
                }
                return result;
            } catch (error) {
                console.error(error);
                return {
                    totalScore: 0,
                    percentageChange: 0,
                };
            }
        },
        chartSettings: {
            fill: false,
            borderColor: null,
            tension: 0.4,
            pointRadius: 0,
            showLegend: false,
            showXAxis: false,
            showYAxis: false,
            maintainAspectRatio: false,
            responsive: true,
            height: 75,
            width: null,
        },
    },
    // Add more card types here
};
