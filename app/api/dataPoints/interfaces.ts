import { DataPoint } from '@/app/api/dataPoints/api';

export interface groupedDataPoints {
    exercises: DataPoint[];
    muscleTypes: DataPoint[];
    workoutEquipments: DataPoint[];
}