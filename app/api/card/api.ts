import { Card as CardModel } from '@prisma/client';
import { CreateCard, ExtendedCard } from '@/app/api/card/interfaces';
export const CardApi = {
    getCards: async (): Promise<ExtendedCard[]> => {
        const response = await fetch('/api/card');
        return response.json();
    },
    getCardsByType: async (type: string): Promise<ExtendedCard[]> => {
        const response = await fetch(`/api/card?type=${type}`);
        return response.json();
    },
    getCard: async (id: number): Promise<ExtendedCard> => {
        const response = await fetch(`/api/card?id=${id}`);
        return response.json();
    },
    createCard: async (data: CreateCard): Promise<ExtendedCard> => {
        const response = await fetch('/api/card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateCard: async (id: string, data: ExtendedCard): Promise<ExtendedCard> => {
        const response = await fetch(`/api/card?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
    updateCards: async (data: ExtendedCard[]): Promise<ExtendedCard[]> => {
        const response = await fetch('/api/card', {
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