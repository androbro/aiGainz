import React from 'react';
import { Workout } from '../utils/workoutDataParser';

interface ExerciseFilterProps {
    workouts: Workout[];
    onMuscleGroupSelect: (muscleGroup: string) => void;
    onExerciseSelect: (exercise: string) => void;
}

const ExerciseFilter: React.FC<ExerciseFilterProps> = ({ workouts, onMuscleGroupSelect, onExerciseSelect }) => {
    const muscleGroups = Array.from(new Set(workouts.flatMap(workout =>
        workout.exercises.map(exercise => exercise.targetMuscleGroup)
    )));

    const exercises = Array.from(new Set(workouts.flatMap(workout =>
        workout.exercises.map(exercise => exercise.name)
    )));

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-4">
                <label htmlFor="muscleGroup" className="block text-sm font-medium text-gray-700">Muscle Group</label>
                <select
                    id="muscleGroup"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={(e) => onMuscleGroupSelect(e.target.value)}
                >
                    <option value="">All Muscle Groups</option>
                    {muscleGroups.map((group) => (
                        <option key={group} value={group}>{group}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="exercise" className="block text-sm font-medium text-gray-700">Exercise</label>
                <select
                    id="exercise"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={(e) => onExerciseSelect(e.target.value)}
                >
                    <option value="">All Exercises</option>
                    {exercises.map((exercise) => (
                        <option key={exercise} value={exercise}>{exercise}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ExerciseFilter;
