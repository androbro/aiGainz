import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NutrientMetricsData {
    caloricIntake: number;
    waterIntake: number;
    carbohydrates: number;
    proteins: number;
    fats: number;
}

const initialState: NutrientMetricsData = {
    caloricIntake: 0,
    waterIntake: 0,
    carbohydrates: 0,
    proteins: 0,
    fats: 0,
};

const nutrientMetricsSlice = createSlice({
    name: 'nutrientMetrics',
    initialState,
    reducers: {
        setCaloricIntake: (state, action: PayloadAction<number>) => {
            state.caloricIntake = action.payload;
        },
        setWaterIntake: (state, action: PayloadAction<number>) => {
            state.waterIntake = action.payload;
        },
        setCarbohydrates: (state, action: PayloadAction<number>) => {
            state.carbohydrates = action.payload;
        },
        setProteins: (state, action: PayloadAction<number>) => {
            state.proteins = action.payload;
        },
        setFats: (state, action: PayloadAction<number>) => {
            state.fats = action.payload;
        },
    },
});

export const {
    setCaloricIntake,
    setWaterIntake,
    setCarbohydrates,
    setProteins,
    setFats,
} = nutrientMetricsSlice.actions;

export default nutrientMetricsSlice.reducer;