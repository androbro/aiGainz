// components/StrengthScoreChart.tsx

import React, { useEffect, useState } from 'react';
import { ExtendedChart } from '@/app/api/chart/interfaces';
import { WorkoutExercise, Exercise, Workout } from '@prisma/client';
import { calculateDailyStrengthScore } from '@/app/utils/strengthScoreCalculator';
import { ChartDisplay } from '@/app/components/cards/components/chartDisplay';
import { WorkoutApi } from '@/app/api/workout/api';
import { ExtendedWorkout } from '@/app/api/workout/interfaces';

type ExtendedWorkoutExercise = WorkoutExercise & {
    exercise: Exercise;
    workout: Workout;
};

export default function StrengthScoreChart() {
    const [chartData, setChartData] = useState<ExtendedChart | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWorkoutExercises = async () => {
            try {
                setIsLoading(true);
                const startDate = new Date();
                startDate.setMonth(startDate.getMonth() - 6); // Get workouts from the last 6 months
                const workouts: ExtendedWorkout[] = await WorkoutApi.getWorkoutsInRange(startDate);
                processWorkoutData(workouts);
            } catch (error) {
                console.error('Failed to fetch workouts:', error);
                setError('Failed to fetch workout data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchWorkoutExercises();
    }, []);

    const processWorkoutData = (workouts: ExtendedWorkout[]) => {
        // Flatten workout exercises
        const workoutExercises = workouts.flatMap((workout) =>
            workout.WorkoutExercise.map((we) => ({
                ...we,
                workout: { createdAt: workout.createdAt },
            }))
        );

        // Group workout exercises by date
        const groupedExercises = workoutExercises.reduce(
            (acc, we) => {
                const date = new Date(we.workout.createdAt).toDateString();
                if (!acc[date]) acc[date] = [];
                acc[date].push(we as ExtendedWorkoutExercise);
                return acc;
            },
            {} as Record<string, ExtendedWorkoutExercise[]>
        );

        // Calculate daily strength scores
        const dataPoints = Object.entries(groupedExercises).map(([date, exercises]) => ({
            date: new Date(date),
            score: calculateDailyStrengthScore(exercises),
        }));

        // Sort data points by date
        dataPoints.sort((a, b) => a.date.getTime() - b.date.getTime());

        // Create chart data
        const newChartData: ExtendedChart = {
            id: 1,
            label: 'Total Strength Score',
            fill: true,
            borderColor: '#4CAF50',
            tension: 0.4,
            pointRadius: 4,
            showLegend: false,
            showXAxis: true,
            showYAxis: true,
            maintainAspectRatio: false,
            responsive: true,
            width: 600,
            height: 300,
            dataType: 'WORKOUT_EXERCISE',
            dataSourceId: 1,
            dataPoints,
        };

        setChartData(newChartData);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!chartData) {
        return <div>No data available</div>;
    }

    return <ChartDisplay chartData={chartData} />;
}