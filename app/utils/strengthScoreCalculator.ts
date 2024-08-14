// utils/strengthScoreCalculator.ts

import { WorkoutExercise, Exercise } from '@prisma/client';

type ExtendedWorkoutExercise = WorkoutExercise & { exercise: Exercise };

// Difficulty multipliers
const DIFFICULTY_MULTIPLIERS = {
    Beginner: 1,
    Intermediate: 1.5,
    Advanced: 2,
};

// Calculate score for a single workout exercise
export const calculateExerciseScore = (
    workoutExercise: ExtendedWorkoutExercise
): number => {
    const { sets, reps, weight, exercise } = workoutExercise;
    const volume = sets * reps * weight;
    const difficultyMultiplier = DIFFICULTY_MULTIPLIERS[exercise.difficulty as keyof typeof DIFFICULTY_MULTIPLIERS];

    return volume * difficultyMultiplier;
};

// Calculate total strength score for a day
export const calculateDailyStrengthScore = (
    workoutExercises: ExtendedWorkoutExercise[]
): number => {
    return workoutExercises.reduce((total, we) => total + calculateExerciseScore(we), 0);
};