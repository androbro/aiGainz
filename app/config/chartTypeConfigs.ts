import { ChartDataType } from '@prisma/client';

const baseConfig = {
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: '',
        },
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
            title: {
                display: false,
                text: '',
            },
        },
    },
    maintainAspectRatio: false,
    responsive: true,
};

export const chartTypeConfigs: Record<ChartDataType, typeof baseConfig> = {
    [ChartDataType.EXERCISE]: { ...baseConfig },
    [ChartDataType.MUSCLE_TYPE]: { ...baseConfig },
    [ChartDataType.WORKOUT_EQUIPMENT]: { ...baseConfig },
    [ChartDataType.WORKOUT_EXERCISE]: { ...baseConfig },
    [ChartDataType.EQUIPMENT_TYPE]: { ...baseConfig },
    [ChartDataType.EQUIPMENT_CATEGORY]: { ...baseConfig },
};

// If you want to customize any specific chart type, you can do it like this:
// chartTypeConfigs[ChartDataType.EXERCISE].plugins.title.text = 'Exercise Progress';