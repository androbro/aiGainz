import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CardApi } from '@/app/api/card/api';
import { Card } from '@prisma/client';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';

export const useCardsMutations = () => {
    const queryClient = useQueryClient();

    const updateCardMutation = useMutation<Card, Error, { id: string; data: Partial<Card> }>({
        mutationFn: ({ id, data }) => CardApi.updateCard(id, data),
        onSuccess: (updatedCard) => {
            queryClient.invalidateQueries({ queryKey: ['cards'] });
            queryClient.setQueryData<Card[]>(
                ['cards'],
                (oldCards) =>
                    oldCards?.map((card) => (card.id === updatedCard.id ? updatedCard : card)) ?? []
            );
        },
    });

    const createCardMutation = useMutation<Card, Error, Partial<Card>>({
        mutationFn: (data) => CardApi.createCard(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cards'] });
        },
    });

    const deleteCardMutation = useMutation<void, Error, string>({
        mutationFn: (id) => CardApi.deleteCard(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cards'] });
        },
    });

    useDataStateHandler({
        isLoading: updateCardMutation.isPending,
        isError: updateCardMutation.isError,
        error: updateCardMutation.error,
        errorMessage: 'Error updating card',
    });

    useDataStateHandler({
        isLoading: createCardMutation.isPending,
        isError: createCardMutation.isError,
        error: createCardMutation.error,
        errorMessage: 'Error creating card',
    });

    useDataStateHandler({
        isLoading: deleteCardMutation.isPending,
        isError: deleteCardMutation.isError,
        error: deleteCardMutation.error,
        errorMessage: 'Error deleting card',
    });

    const debouncedUpdateCard = useCallback(debounce(updateCardMutation.mutate, 500), [
        updateCardMutation.mutate,
    ]);

    const debouncedCreateCard = useCallback(debounce(createCardMutation.mutate, 500), [
        createCardMutation.mutate,
    ]);

    const debouncedDeleteCard = useCallback(debounce(deleteCardMutation.mutate, 500), [
        deleteCardMutation.mutate,
    ]);

    return {
        updateCard: debouncedUpdateCard,
        isUpdatingCard: updateCardMutation.isPending,
        createCard: debouncedCreateCard,
        isCreatingCard: createCardMutation.isPending,
        deleteCard: debouncedDeleteCard,
        isDeletingCard: deleteCardMutation.isPending,
    };
};