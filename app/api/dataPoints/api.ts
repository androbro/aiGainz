import { ChartDataType } from '@prisma/client';

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
        const queryParams = new URLSearchParams({
            dataType: dataType.toString(),
            dataSourceId: dataSourceId.toString(),
        });

        if (period) {
            queryParams.append('period', period.toISOString());
        }

        const response = await fetch(`/api/dataPoints?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data points');
        }
        return response.json();
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