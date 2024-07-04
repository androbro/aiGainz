import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WorkoutMetricsData {
    exerciseIntensity: number;
    repetitions: number;
    sets: number;
    maxLift: number;
    endurance: number;
    vo2Max: number;
    recoveryTime: number;
    perceivedExertion: number;
}

const initialState: WorkoutMetricsData = {
    exerciseIntensity: 0,
    repetitions: 0,
    sets: 0,
    maxLift: 0,
    endurance: 0,
    vo2Max: 0,
    recoveryTime: 0,
    perceivedExertion: 0,
};

const workoutMetricsSlice = createSlice({
    name: 'workoutMetrics',
    initialState,
    reducers: {
        setExerciseIntensity: (state, action: PayloadAction<number>) => {
            state.exerciseIntensity = action.payload;
        },
        setRepetitions: (state, action: PayloadAction<number>) => {
            state.repetitions = action.payload;
        },
        setSets: (state, action: PayloadAction<number>) => {
            state.sets = action.payload;
        },
        setMaxLift: (state, action: PayloadAction<number>) => {
            state.maxLift = action.payload;
        },
        setEndurance: (state, action: PayloadAction<number>) => {
            state.endurance = action.payload;
        },
        setVo2Max: (state, action: PayloadAction<number>) => {
            state.vo2Max = action.payload;
        },
        setRecoveryTime: (state, action: PayloadAction<number>) => {
            state.recoveryTime = action.payload;
        },
        setPerceivedExertion: (state, action: PayloadAction<number>) => {
            state.perceivedExertion = action.payload;
        },
    },
});

export const {
    setExerciseIntensity,
    setRepetitions,
    setSets,
    setMaxLift,
    setEndurance,
    setVo2Max,
    setRecoveryTime,
    setPerceivedExertion,
} = workoutMetricsSlice.actions;

export default workoutMetricsSlice.reducer;