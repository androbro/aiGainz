// app/api/workout/api.ts

import { Workout, WorkoutExercise, Exercise } from '@prisma/client';
import { ExtendedWorkout } from '@/app/api/workout/interfaces';

export const WorkoutApi = {
    getWorkouts: async (): Promise<ExtendedWorkout[]> => {
        const response = await fetch('/api/workout');
        if (!response.ok) {
            throw new Error('Failed to fetch workouts');
        }
        return response.json();
    },

    getWorkout: async (id: string): Promise<ExtendedWorkout> => {
        const response = await fetch(`/api/workout?id=${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch workout');
        }
        return response.json();
    },

    getWorkoutsInRange: async (startDate: Date): Promise<ExtendedWorkout[]> => {
        const response = await fetch(`/api/workout?startDate=${startDate.toISOString()}`);
        if (!response.ok) {
            throw new Error('Failed to fetch workouts in range');
        }
        return response.json();
    },

    createWorkout: async (data: Partial<Workout>): Promise<ExtendedWorkout> => {
        const response = await fetch('/api/workout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to create workout');
        }
        return response.json();
    },

    updateWorkout: async (id: string, data: Partial<Workout>): Promise<ExtendedWorkout> => {
        const response = await fetch(`/api/workout?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to update workout');
        }
        return response.json();
    },

    deleteWorkout: async (id: string): Promise<void> => {
        const response = await fetch(`/api/workout?id=${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete workout');
        }
    },
};