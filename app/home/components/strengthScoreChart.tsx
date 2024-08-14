import React, { useEffect, useRef, useState } from 'react';
import { ExtendedChart } from '@/app/api/chart/interfaces';
import { Exercise, Workout, WorkoutExercise } from '@prisma/client';
import { calculateDailyStrengthScore } from '@/app/utils/strengthScoreCalculator';
import { ChartDisplay } from '@/app/components/cards/components/chartDisplay';
import { WorkoutApi } from '@/app/api/workout/api';
import { ExtendedWorkout } from '@/app/api/workout/interfaces';

type ExtendedWorkoutExercise = WorkoutExercise & {
    exercise: Exercise;
    workout: Workout;
};

export default function StrengthScoreChart({ period }: { period: string }) {
    const [chartData, setChartData] = useState<ExtendedChart | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchWorkoutExercises = async () => {
            try {
                setIsLoading(true);
                const startDate = new Date();
                startDate.setDate(startDate.getDate() - parseInt(period));
                const workouts: ExtendedWorkout[] = await WorkoutApi.getWorkoutsInRange(startDate);

                let primaryColor = '#000000';
                if (chartRef.current) {
                    const computedStyle = getComputedStyle(chartRef.current);
                    primaryColor = computedStyle.getPropertyValue('--primary-color');
                }

                processWorkoutData(workouts, primaryColor);
            } catch (error) {
                console.error('Failed to fetch workouts:', error);
                setError('Failed to fetch workout data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchWorkoutExercises();
    }, [period]);

    const processWorkoutData = (workouts: ExtendedWorkout[], borderColor: string) => {
        const workoutExercises = workouts.flatMap((workout) =>
            workout.WorkoutExercise.map((we) => ({
                ...we,
                workout: { createdAt: workout.createdAt },
            }))
        );

        const groupedExercises: Record<string, ExtendedWorkoutExercise[]> = {};
        for (const we of workoutExercises) {
            const date = new Date(we.workout.createdAt).toDateString();
            if (!groupedExercises[date]) groupedExercises[date] = [];
            groupedExercises[date].push(we as ExtendedWorkoutExercise);
        }

        const dataPoints = Object.entries(groupedExercises).map(([date, exercises]) => ({
            date: new Date(date),
            score: calculateDailyStrengthScore(exercises),
        }));

        dataPoints.sort((a, b) => a.date.getTime() - b.date.getTime());

        const newChartData: ExtendedChart = {
            id: 1,
            label: 'Total Strength Score',
            fill: false,
            borderColor: borderColor,
            tension: 0,
            pointRadius: 4,
            showLegend: false,
            showXAxis: true,
            showYAxis: true,
            maintainAspectRatio: false,
            responsive: true,
            width: 10,
            height: 300,
            dataType: 'WORKOUT_EXERCISE',
            dataSourceId: 1,
            dataPoints,
        };

        setChartData(newChartData);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!chartData) return <div>No data available</div>;

    return (
        <div ref={chartRef}>
            <ChartDisplay chartData={chartData} />
        </div>
    );
}