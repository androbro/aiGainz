import { CardAdjustmentFunction } from '@/app/interfaces/card';
import { ExtendedCard } from '@/app/interfaces/types';
import { PrismaClient } from '@prisma/client';

export const adjustOverallStrength = async (card: ExtendedCard): Promise<ExtendedCard> => {
    if (!card.period) {
        throw new Error('Period is required for Overall Strength calculation');
    }

    const { totalScore, percentageChange } = await calculateStrengthScore(card.period);

    // Update the last data point with the new score
    const updatedDataPoints = [...card.chartData.dataPoints];
    if (updatedDataPoints.length > 0) {
        updatedDataPoints[updatedDataPoints.length - 1] = {
            ...updatedDataPoints[updatedDataPoints.length - 1],
            score: totalScore,
        };
    }

    return {
        ...card,
        chartData: {
            ...card.chartData,
            dataPoints: updatedDataPoints,
        },
    };
};

const prisma = new PrismaClient();

interface StrengthScoreResult {
    totalScore: number;
    percentageChange: number;
}

export async function calculateStrengthScore(period: Date): Promise<StrengthScoreResult> {
    const startDate = new Date(period);
    startDate.setMonth(startDate.getMonth() - 1); // Calculate for the last month

    const workouts = await prisma.workout.findMany({
        where: {
            createdAt: {
                gte: startDate,
                lte: period,
            },
        },
        include: {
            WorkoutExercise: {
                include: {
                    exercise: true,
                },
            },
        },
    });

    let totalScore = 0;
    let previousScore = 0;

    workouts.forEach((workout, index) => {
        let workoutScore = 0;
        workout.WorkoutExercise.forEach((exercise) => {
            const { sets, reps, weight } = exercise;
            const volume = sets * reps * weight;

            let difficultyFactor = 1;
            switch (exercise.exercise.difficulty) {
                case 'Intermediate':
                    difficultyFactor = 1.2;
                    break;
                case 'Advanced':
                    difficultyFactor = 1.5;
                    break;
            }

            workoutScore += (weight + volume * 0.5) * difficultyFactor;
        });

        if (index === 0) {
            previousScore = workoutScore;
        }
        totalScore += workoutScore;
    });

    const averageScore = totalScore / workouts.length;
    const percentageChange =
        previousScore !== 0 ? ((averageScore - previousScore) / previousScore) * 100 : 0;

    return {
        totalScore: Math.round(averageScore * 10000) / 10000, // Round to 4 decimal places
        percentageChange,
    };
}