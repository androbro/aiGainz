import { Exercise } from '@prisma/client';

export const ExerciseApi = {
    getExercises: async (): Promise<Exercise[]> => {
        const response = await fetch('/api/exercise');
        return response.json();
    },
    getExercise: async (id: string): Promise<Exercise> => {
        const response = await fetch(`/api/exercise?id=${id}`);
        return response.json();
    },
    createExercise: async (data: any): Promise<Exercise> => {
        const response = await fetch('/api/exercise', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateExercise: async (id: string, data: any): Promise<Exercise> => {
        const response = await fetch(`/api/exercise?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    deleteExercise: async (id: string): Promise<void> => {
        const response = await fetch(`/api/exercise?id=${id}`, {
            method: 'DELETE',
        });
    },
};