import { CardPropData } from '@/app/interfaces/card';
import { Workout } from '@/app/interfaces/calculation';

export async function calculateStrengthScore(period: Date): Promise<CardPropData> {
    let returnValue: CardPropData = {
        totalScore: 0,
        dataPoints: [],
        percentageChange: 0,
    };
    const fetchWorkouts = async (startDate: Date): Promise<Workout[]> => {
        const response = await fetch(`api/workout?startDate=${startDate}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch workouts');
        }
        return await response.json();
    };

    const calculateStrengthScore = (workouts: Workout[]): CardPropData => {
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

                const exerciseScore = (weight + volume * 0.5 * (difficultyFactor * 1.2)) / 100;

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
    };

    await fetchWorkouts(period).then(
        (workouts) => (returnValue = calculateStrengthScore(workouts))
    );

    return returnValue;
}
