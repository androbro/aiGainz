import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BodyMetricsData {
    weight: number;
    height: number;
    bmi: number;
    sleepDuration: number;
}

const initialState: BodyMetricsData = {
    weight: 0,
    height: 0,
    bmi: 0,
    sleepDuration: 0,
};

const bodyMetricsSlice = createSlice({
    name: 'bodyMetrics',
    initialState,
    reducers: {
        setWeight: (state, action: PayloadAction<number>) => {
            state.weight = action.payload;
            state.bmi = calculateBMI(state.weight, state.height);
        },
        setHeight: (state, action: PayloadAction<number>) => {
            state.height = action.payload;
            state.bmi = calculateBMI(state.weight, state.height);
        },
        setSleepDuration: (state, action: PayloadAction<number>) => {
            state.sleepDuration = action.payload;
        },
    },
});

function calculateBMI(weight: number, height: number): number {
    if (height <= 0) return 0;
    return weight / ((height / 100) ** 2);
}

export const { setWeight, setHeight, setSleepDuration } = bodyMetricsSlice.actions;
export default bodyMetricsSlice.reducer;