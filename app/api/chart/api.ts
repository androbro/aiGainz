import { ExtendedChart } from '@/app/api/chart/interfaces';
export const ChartApi = {
    getCharts: async (): Promise<ExtendedChart[]> => {
        const response = await fetch('/api/chart');
        return response.json();
    },
    getChart: async (id: string): Promise<ExtendedChart> => {
        const response = await fetch(`/api/chart?id=${id}`);
        return response.json();
    },
    createChart: async (data: any): Promise<ExtendedChart> => {
        const response = await fetch('/api/chart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateChart: async (id: string, data: any): Promise<ExtendedChart> => {
        const response = await fetch(`/api/chart?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    deleteChart: async (id: string): Promise<void> => {
        const response = await fetch(`/api/chart?id=${id}`, {
            method: 'DELETE',
        });
    },
};