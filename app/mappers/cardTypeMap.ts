import { CardPropData, CardType } from '@/app/interfaces/card';
import { calculateStrengthScore } from '@/app/functions/strengthScore';

export const cardTypes: Record<string, CardType> = {
    'Overall Strength': {
        id: 'overall-strength',
        title: 'Overall Strength',
        calculationFunction: async (params): Promise<CardPropData> => {
            try {
                const result = await calculateStrengthScore(params);
                if (result === null) {
                    return {
                        totalScore: 0, // Default value
                        dataPoints: [], // Default value
                        percentageChange: 0, // Default value
                    };
                }
                return result;
            } catch (error) {
                // Handle error or return a default CardPropData
                console.error(error);
                return {
                    totalScore: 0, // Default value
                    dataPoints: [], // Default value
                    percentageChange: 0, // Default value
                };
            }
        },
        chartSettings: {
            fill: false,
            borderColor: undefined,
            tension: 0.4,
            pointRadius: 0,
            settings: {
                showLegend: false,
                showXAxis: false,
                showYAxis: false,
                maintainAspectRatio: false,
                responsive: true,
                height: 75,
            },
        },
    },
    // Add more card types here
};
