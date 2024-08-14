import { Exercise, Workout, WorkoutExercise } from '@prisma/client';

export type ExtendedWorkout = Workout & {
    WorkoutExercise: (WorkoutExercise & {
        exercise: Exercise;
        workout: Pick<Workout, 'createdAt'>;
    })[];
};