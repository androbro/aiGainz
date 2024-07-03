import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Workout } from '../utils/workoutDataParser';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface MuscleGroupChartProps {
    workouts: Workout[];
    selectedMuscleGroup: string | null;
}

// @ts-ignore
const MuscleGroupChart: React.FC<MuscleGroupChartProps> = ({ workouts, selectedMuscleGroup }) => {
    const muscleGroups = Array.from(new Set(workouts.flatMap(workout =>
        workout.exercises.map(exercise => exercise.targetMuscleGroup)
    )));

    const data = {
        labels: muscleGroups,
        datasets: [
            {
                label: 'Training Frequency',
                data: muscleGroups.map(group =>
                    workouts.filter(workout =>
                        workout.exercises.some(exercise => exercise.targetMuscleGroup === group)
                    ).length
                ),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Muscle Group Training Frequency',
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Bar data={data} options={options} />
        </div>
    );
};

export default MuscleGroupChart;
