import { CardAdjustment } from '@/app/interfaces/card';
import { adjustOverallStrength } from '@/app/functions/strengthScore';

export const cardAdjustments: CardAdjustment[] = [
    {
        title: 'Overall Strength',
        adjustmentFunction: adjustOverallStrength,
    },
    // Add more card adjustments here as needed
];