import { configureStore } from '@reduxjs/toolkit';
import bodyMetricsReducer from './features/bodyMetrics/bodyMetricsSlice';
import workoutMetricsReducer from './features/workoutMetrics/workoutMetricsSlice';
import nutrientMetricsReducer from './features/nutrientMetrics/nutrientMetricsSlice';

export const store = configureStore({
    reducer: {
        bodyMetrics: bodyMetricsReducer,
        workoutMetrics: workoutMetricsReducer,
        nutrientMetrics: nutrientMetricsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;