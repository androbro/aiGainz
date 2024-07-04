import React from 'react';
import { Typography, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dummyData = [
    { date: '2023-01-01', weight: 70 },
    { date: '2023-02-01', weight: 69 },
    { date: '2023-03-01', weight: 68 },
    { date: '2023-04-01', weight: 67 },
    { date: '2023-05-01', weight: 66 },
];

const Dashboard: React.FC = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">Weight Over Time</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={dummyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="weight" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;