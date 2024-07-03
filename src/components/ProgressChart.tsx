import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Workout } from '../utils/workoutDataParser';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ProgressChartProps {
    workouts: Workout[];
    selectedExercise: string | null;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ workouts, selectedExercise }) => {
    const filteredWorkouts = workouts.filter(workout =>
        workout.exercises.some(exercise => exercise.name === selectedExercise)
    );

    const data = {
        labels: filteredWorkouts.map(workout => workout.date.toLocaleDateString()),
        datasets: [
            {
                label: 'Weight (kg)',
                data: filteredWorkouts.map(workout => {
                    const exercise = workout.exercises.find(e => e.name === selectedExercise);
                    return exercise ? Math.max(...exercise.weight) : 0;
                }),
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
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
                text: `Progress for ${selectedExercise || 'Selected Exercise'}`,
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Line data={data} options={options} />
        </div>
    );
};

export default ProgressChart;
