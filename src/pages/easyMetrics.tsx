import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { Typography, Grid, TextField, Button } from '@mui/material';
import { RootState } from '../store';
import { setWeight, setHeight, setSleepDuration } from '../features/bodyMetrics/bodyMetricsSlice';

const EasyMetrics: React.FC = () => {
    const dispatch = useDispatch();
    const bodyMetrics = useSelector((state: RootState) => state.bodyMetrics);

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setWeight(Number(event.target.value)));
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeight(Number(event.target.value)));
    };

    const handleSleepDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSleepDuration(Number(event.target.value)));
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Easy Metrics
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Weight (kg)"
                        type="number"
                        value={bodyMetrics.weight || ''}
                        onChange={handleWeightChange}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Height (cm)"
                        type="number"
                        value={bodyMetrics.height || ''}
                        onChange={handleHeightChange}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Sleep Duration (hours)"
                        type="number"
                        value={bodyMetrics.sleepDuration || ''}
                        onChange={handleSleepDurationChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        BMI: {bodyMetrics.bmi.toFixed(2)}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default EasyMetrics;