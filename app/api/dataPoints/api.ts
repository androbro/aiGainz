import { ChartDataType } from '@prisma/client';
import axios from 'axios';

export interface DataPoint {
    id: number;
    date: Date;
    score: number;
    // Add other fields as necessary
}

export const DataPointsApi = {
    getDataPoints: async (
        dataType: ChartDataType,
        dataSourceId: number,
        period?: Date
    ): Promise<DataPoint[]> => {
        try {
            const params = {
                dataType: dataType.toString(),
                dataSourceId: dataSourceId.toString(),
                period: period ? period.toISOString() : undefined,
            };

            const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
            const response = await axios.get(`${baseUrl}/api/dataPoints`, { params });

            console.log('Response received:', response.status, response.statusText);

            if (response.status !== 200) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.message);
                console.error('Response data:', error.response?.data);
                console.error('Response status:', error.response?.status);
            } else {
                console.error('Unexpected error:', error);
            }
            throw new Error('Failed to fetch data points');
        }
    },

    // If you need to add, update, or delete data points in the future,
    // you can add more methods here following a similar pattern:

    // createDataPoint: async (data: Partial<DataPoint>): Promise<DataPoint> => {
    //     const response = await fetch('/api/dataPoints', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     });
    //     if (!response.ok) {
    //         throw new Error('Failed to create data point');
    //     }
    //     return response.json();
    // },

    // updateDataPoint: async (id: number, data: Partial<DataPoint>): Promise<DataPoint> => {
    //     const response = await fetch(`/api/dataPoints?id=${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     });
    //     if (!response.ok) {
    //         throw new Error('Failed to update data point');
    //     }
    //     return response.json();
    // },

    // deleteDataPoint: async (id: number): Promise<void> => {
    //     const response = await fetch(`/api/dataPoints?id=${id}`, {
    //         method: 'DELETE',
    //     });
    //     if (!response.ok) {
    //         throw new Error('Failed to delete data point');
    //     }
    // },
};