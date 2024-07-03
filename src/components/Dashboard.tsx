import React, { useState, useEffect } from 'react';
import { parseWorkoutData, Workout } from '../utils/workoutDataParser';
import ProgressChart from './ProgressChart';
import MuscleGroupChart from './MuscleGroupChart';
import ExerciseFilter from './ExerciseFilter';
import {MD_DATA} from "../assets/data.ts";

const Dashboard: React.FC = () => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string | null>(null);
    const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

    useEffect(() => {
        const parsedWorkouts = parseWorkoutData(MD_DATA);
        setWorkouts(parsedWorkouts);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Fitness Progress Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ExerciseFilter
                    workouts={workouts}
                    onMuscleGroupSelect={setSelectedMuscleGroup}
                    onExerciseSelect={setSelectedExercise}
                />
                <ProgressChart
                    workouts={workouts}
                    selectedExercise={selectedExercise}
                />
                <MuscleGroupChart
                    workouts={workouts}
                    selectedMuscleGroup={selectedMuscleGroup}
                />
            </div>
        </div>
    );
};

export default Dashboard;
