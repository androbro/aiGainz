import { QueryCache, useMutation, useQueryClient } from '@tanstack/react-query';
import { CardApi } from '@/app/api/card/api';
import { Card } from '@prisma/client';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';
import { CreateCard, ExtendedCard } from '@/app/api/card/interfaces';
import { infoNotification, successNotification } from '@/app/functions/notifications';

export const useCardsMutations = () => {
    const queryClient = useQueryClient();

    const updateCardMutation = useMutation<
        ExtendedCard,
        Error,
        { id: string; data: Partial<ExtendedCard> }
    >({
        mutationFn: ({ id, data }) => {
            const cardData: Partial<ExtendedCard> & { id?: number } = {
                ...data,
                id: parseInt(id),
            };
            if (isExtendedCard(cardData)) {
                return CardApi.updateCard(id, cardData);
            } else {
                return Promise.reject(new Error('Invalid data'));
            }
        },
        onSuccess: (updatedCard) => {
            //fetch all cached data
            console.log('updatedCard', updatedCard);
            infoNotification('Card has been updated', 'success');
        },
    });

    function isExtendedCard(card: Partial<ExtendedCard> & { id?: number }): card is ExtendedCard {
        return card.id !== undefined;
    }

    const createCardMutation = useMutation<ExtendedCard, Error, CreateCard>({
        mutationFn: (data) => CardApi.createCard(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cards'] });
            successNotification('Card has been created', 'success');
        },
    });

    const deleteCardMutation = useMutation<void, Error, string>({
        mutationFn: (id) => CardApi.deleteCard(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cards'] });
            infoNotification('Card has been deleted', 'success');
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
        updatedCard: updateCardMutation.data,
        createCard: debouncedCreateCard,
        isCreatingCard: createCardMutation.isPending,
        createdCard: createCardMutation.data,
        deleteCard: debouncedDeleteCard,
        isDeletingCard: deleteCardMutation.isPending,
    };
};