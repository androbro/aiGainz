import { useCardsQuery, UseCardsQueryProps } from '@/hooks/queries/cards/useCardsQuery';
import { useCardsMutations } from '@/hooks/commands/cards/useCardsMutations';

export const useCards = (props: UseCardsQueryProps) => {
    const { cards, isLoadingCards, refetchCards, errorCards } = useCardsQuery(props);
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
    };
};