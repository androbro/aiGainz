import { Exercise, GlobalSetting } from '@prisma/client';
import { ExtendedCard } from '@/app/api/card/interfaces';

export const settingsApi = {
    getSetting: async (id: string): Promise<GlobalSetting> => {
        const response = await fetch(`/api/globalSetting?id=${id}`);
        return response.json();
    },
    getSettings: async (): Promise<GlobalSetting[]> => {
        const response = await fetch('/api/globalSetting');
        return response.json();
    },
    createSetting: async (data: GlobalSetting): Promise<GlobalSetting> => {
        const response = await fetch('/api/globalSetting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateSetting: async (data: GlobalSetting): Promise<GlobalSetting> => {
        const response = await fetch(`/api/globalSetting`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateSettings: async (data: GlobalSetting[]): Promise<GlobalSetting[]> => {
        const response = await fetch('/api/globalSetting', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    deleteSetting: async (id: string): Promise<void> => {
        const response = await fetch(`/api/globalSetting?id=${id}`, {
            method: 'DELETE',
        });
    },
};