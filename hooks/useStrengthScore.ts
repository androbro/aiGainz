import { useState, useEffect, useCallback } from 'react';

interface Workout {
    id: number;
    createdAt: string;
    WorkoutExercise: Array<{
        sets: number;
        reps: number;
        weight: number;
        exercise: {
            difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
        };
    }>;
}

interface StrengthScoreParams {
    startDate: Date;
    endDate: Date;
    weightMultiplier: number;
    volumeMultiplier: number;
    difficultyMultiplier: number;
}

export interface CardPropData {
    totalScore: number;
    dataPoints: { date: Date; score: number }[];
    percentageChange: number;
}

export function useStrengthScore(initialParams: StrengthScoreParams) {
    const [params, setParams] = useState<StrengthScoreParams>(initialParams);
    const [result, setResult] = useState<CardPropData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchWorkouts = useCallback(
        async (startDate: Date, endDate: Date): Promise<Workout[]> => {
            const response = await fetch('/api/workout', {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch workouts');
            }
            const allWorkouts: Workout[] = await response.json();
            return allWorkouts.filter((workout) => {
                const workoutDate = new Date(workout.createdAt);
                return workoutDate >= startDate && workoutDate <= endDate;
            });
        },
        []
    );

    const calculateStrengthScore = useCallback(
        (workouts: Workout[], params: StrengthScoreParams): CardPropData => {
            const dataPoints: { date: Date; score: number }[] = [];
            let totalScore = 0;

            for (const workout of workouts) {
                let workoutScore = 0;

                for (const workoutExercise of workout.WorkoutExercise) {
                    const { sets, reps, weight } = workoutExercise;
                    const volume = sets * reps * weight;

                    let difficultyFactor = 1;
                    switch (workoutExercise.exercise.difficulty) {
                        case 'Beginner':
                            difficultyFactor = 1;
                            break;
                        case 'Intermediate':
                            difficultyFactor = 1.2;
                            break;
                        case 'Advanced':
                            difficultyFactor = 1.5;
                            break;
                    }

                    const exerciseScore =
                        (weight * params.weightMultiplier +
                            volume *
                                params.volumeMultiplier *
                                (difficultyFactor * params.difficultyMultiplier)) /
                        100;

                    workoutScore += exerciseScore;
                }

                totalScore += workoutScore;
                dataPoints.push({ date: new Date(workout.createdAt), score: workoutScore });
            }

            const percentageChange =
                dataPoints.length > 1
                    ? ((dataPoints[dataPoints.length - 1].score - dataPoints[0].score) /
                          dataPoints[0].score) *
                      100
                    : 0;

            return {
                totalScore,
                dataPoints,
                percentageChange,
            };
        },
        []
    );

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const workouts = await fetchWorkouts(params.startDate, params.endDate);
                const result = calculateStrengthScore(workouts, params);
                setResult(result);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An error occurred'));
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [params, fetchWorkouts, calculateStrengthScore]);

    const updateParams = useCallback((newParams: Partial<StrengthScoreParams>) => {
        setParams((prevParams) => ({ ...prevParams, ...newParams }));
    }, []);

    return { result, isLoading, error, updateParams };
}
