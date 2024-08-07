import { Exercise, GlobalSetting } from '@prisma/client';
import { ExtendedCard } from '@/app/api/card/interfaces';

export const settingsApi = {
    getSetting: async (id: string): Promise<GlobalSetting> => {
        const response = await fetch(`/api/globalSettings?id=${id}`);
        return response.json();
    },
    getSettings: async (): Promise<GlobalSetting[]> => {
        const response = await fetch('/api/globalSettings');
        return response.json();
    },
    createSetting: async (data: GlobalSetting): Promise<GlobalSetting> => {
        const response = await fetch('/api/globalSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateSetting: async (data: GlobalSetting): Promise<GlobalSetting> => {
        const response = await fetch(`/api/globalSettings`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateSettings: async (data: GlobalSetting[]): Promise<GlobalSetting[]> => {
        const response = await fetch('/api/globalSettings', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    deleteSetting: async (id: string): Promise<void> => {
        const response = await fetch(`/api/globalSettings?id=${id}`, {
            method: 'DELETE',
        });
    },
    getSettingByName: async (key: string): Promise<GlobalSetting> => {
        const response = await fetch(`/api/globalSettings?key=${key}`);
        return response.json();
    },
};