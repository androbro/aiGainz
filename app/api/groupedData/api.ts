import { GroupedData } from '@/app/api/groupedData/interfaces';

export const GroupedDataApi = {
    getGroupedData: async (): Promise<GroupedData[]> => {
        const response = await fetch('/api/groupedData');
        return response.json();
    },
    getSingleGroupedData: async (id: string): Promise<GroupedData> => {
        const response = await fetch(`/api/groupedData?id=${id}`);
        return response.json();
    },
    getGroupedDataWhereRecordsAreFound: async (period: Date): Promise<GroupedData[]> => {
        const response = await fetch(`/api/groupedData/whereRecordsAreFound?period=${period}`);
        return response.json();
    },
    createGroupedData: async (data: any): Promise<GroupedData> => {
        const response = await fetch('/api/groupedData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateGroupedData: async (id: string, data: any): Promise<GroupedData> => {
        const response = await fetch(`/api/groupedData?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    deleteGroupedData: async (id: string): Promise<void> => {
        const response = await fetch(`/api/groupedData?id=${id}`, {
            method: 'DELETE',
        });
    },
};