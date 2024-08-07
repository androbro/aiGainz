import { useCardsQuery, UseCardsQueryProps } from '@/hooks/queries/cards/useCardsQuery';
import { useCardsMutations } from '@/hooks/commands/cards/useCardsMutations';

export const useCards = (props: UseCardsQueryProps) => {
    const { cards, isLoadingCards, refetchCards, errorCards, isFetchedCards } =
        useCardsQuery(props);
    const {
        createCard,
        createdCard,
        deleteCard,
        isCreatingCard,
        isDeletingCard,
        isUpdatingCard,
        isUpdatingCards,
        updateCard,
        updateCards,
        updatedCard,
        updatedCards,
        hasUpdatedCards,
    } = useCardsMutations();

    return {
        cards,
        isLoadingCards,
        refetchCards,
        errorCards,
        createCard,
        createdCard,
        deleteCard,
        isCreatingCard,
        isDeletingCard,
        isUpdatingCard,
        isUpdatingCards,
        updateCard,
        updateCards,
        updatedCard,
        updatedCards,
        isFetchedCards,
        hasUpdatedCards,
    };
};