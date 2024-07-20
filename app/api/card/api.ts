import { Card as CardModel } from '@prisma/client';
export const CardApi = {
    getCards: async (): Promise<CardModel[]> => {
        const response = await fetch('/api/card');
        return response.json();
    },
    getCard: async (id: string): Promise<CardModel> => {
        const response = await fetch(`/api/card?id=${id}`);
        return response.json();
    },
    createCard: async (data: any): Promise<CardModel> => {
        const response = await fetch('/api/card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateCard: async (id: string, data: any): Promise<CardModel> => {
        const response = await fetch(`/api/card?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    deleteCard: async (id: string): Promise<void> => {
        const response = await fetch(`/api/card?id=${id}`, {
            method: 'DELETE',
        });
    },
};