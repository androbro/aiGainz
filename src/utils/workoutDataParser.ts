// @ts-ignore
import { parse, format } from 'date-fns';

export interface Exercise {
    name: string;
    sets: number;
    reps: number[];
    weight: number[];
    targetMuscleGroup: string;
    equipment: string;
}

export interface Workout {
    date: Date;
    duration: string;
    exercises: Exercise[];
}

export function parseWorkoutData(markdown: string): Workout[] {
    const workouts: Workout[] = [];
    const lines = markdown.split('\n');
    let currentWorkout: Partial<Workout> | null = null;

    for (const line of lines) {
        if (line.startsWith('###')) {
            if (currentWorkout) {
                workouts.push(currentWorkout as Workout);
            }
            const [, workoutInfo] = line.split('###');
            // @ts-ignore
            const [, dateStr, timeStr, durationStr] = workoutInfo.match(/\((.*?), (\d+:\d+) h, Duration: (.*?)\)/) || [];
            currentWorkout = {
                date: parse(dateStr, 'EEE, MMM do', new Date()),
                duration: durationStr,
                exercises: [],
            };
        } else if (line.startsWith('|') && currentWorkout) {
            const [, name, sets, reps, weight, targetMuscleGroup, equipment] = line.split('|').map(s => s.trim());
            if (name && name !== 'Exercise') {
                (currentWorkout.exercises as Exercise[]).push({
                    name,
                    sets: parseInt(sets),
                    reps: reps.split(',').map(Number),
                    weight: weight.split(',').map(Number),
                    targetMuscleGroup,
                    equipment,
                });
            }
        }
    }

    if (currentWorkout) {
        workouts.push(currentWorkout as Workout);
    }

    return workouts;
}