import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CardApi } from '@/app/api/card/api';
import { Card } from '@prisma/client';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';
import { CreateCard, ExtendedCard } from '@/app/api/card/interfaces';
import { infoNotification, successNotification } from '@/app/functions/notifications';

// Helper function to check if a card is an ExtendedCard
function isExtendedCard(card: Partial<ExtendedCard> & { id?: number }): card is ExtendedCard {
    return card.id !== undefined;
}

export const useCardsMutations = () => {
    const queryClient = useQueryClient();

    // 1. Define mutations for CRUD operations on cards

    // Update a single card
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
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cards'] });
            infoNotification('Card has been updated', 'success');
        },
    });

    // Update multiple cards at once
    const updateCardsMutation = useMutation<ExtendedCard[], Error, { cards: Card[] }>({
        mutationFn: ({ cards }) => {
            const extendedCards = cards.map((card) => ({
                ...card,
                id: card.id,
            }));
            return CardApi.updateCards(extendedCards);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cards'] });
            infoNotification('Cards have been updated', 'success');
        },
    });

    // Create a new card
    const createCardMutation = useMutation<ExtendedCard, Error, CreateCard>({
        mutationFn: (data) => CardApi.createCard(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cards'] });
            successNotification('Card has been created', 'success');
        },
    });

    // Delete a card
    const deleteCardMutation = useMutation<void, Error, string>({
        mutationFn: (id) => CardApi.deleteCard(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cards'] });
            infoNotification('Card has been deleted', 'success');
        },
    });

    // 2. Set up error and loading state handlers for each mutation
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

    useDataStateHandler({
        isLoading: updateCardsMutation.isPending,
        isError: updateCardsMutation.isError,
        error: updateCardsMutation.error,
        errorMessage: 'Error updating cards',
    });

    // 3. Create debounced versions of the mutation functions
    // This prevents rapid successive calls to the API
    const debouncedUpdateCard = useCallback(debounce(updateCardMutation.mutate, 500), [
        updateCardMutation.mutate,
    ]);

    const debouncedCreateCard = useCallback(debounce(createCardMutation.mutate, 500), [
        createCardMutation.mutate,
    ]);

    const debouncedDeleteCard = useCallback(debounce(deleteCardMutation.mutate, 500), [
        deleteCardMutation.mutate,
    ]);

    const debouncedUpdateCards = useCallback(debounce(updateCardsMutation.mutate, 500), [
        updateCardsMutation.mutate,
    ]);

    // 4. Return an object with all the mutation functions and their states
    return {
        // Update operations
        updateCard: debouncedUpdateCard,
        isUpdatingCard: updateCardMutation.isPending,
        updatedCard: updateCardMutation.data,
        updateCards: debouncedUpdateCards,
        isUpdatingCards: updateCardsMutation.isPending,
        updatedCards: updateCardsMutation.data,
        hasUpdatedCards: updateCardsMutation.isSuccess,
        // Create operation
        createCard: debouncedCreateCard,
        isCreatingCard: createCardMutation.isPending,
        createdCard: createCardMutation.data,
        // Delete operation
        deleteCard: debouncedDeleteCard,
        isDeletingCard: deleteCardMutation.isPending,
    };
};