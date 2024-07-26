import { useCardsQuery, UseCardsQueryProps } from '@/hooks/queries/cards/useCardsQuery';
import { useCardsMutations } from '@/hooks/commands/cards/useCardsMutations';

export const useCards = (props: UseCardsQueryProps) => {
    const { cards, isLoadingCards, refetchCards, errorCards } = useCardsQuery(props);
    const {
        updateCard,
        isUpdatingCard,
        updatedCard,
        createCard,
        createdCard,
        isCreatingCard,
        deleteCard,
        isDeletingCard,
    } = useCardsMutations();

    return {
        cards,
        isLoadingCards,
        refetchCards,
        errorCards,
        updateCard,
        isUpdatingCard,
        createCard,
        createdCard,
        isCreatingCard,
        deleteCard,
        isDeletingCard,
        updatedCard,
    };
};