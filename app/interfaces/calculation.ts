export interface Workout {
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
