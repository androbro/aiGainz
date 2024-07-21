import { useCardsQuery, UseCardsQueryProps } from '@/hooks/queries/cards/useCardsQuery';
import { useCardsMutations } from '@/hooks/commands/cards/useCardsMutations';

export const useCards = (props: UseCardsQueryProps) => {
    const { cards, isLoadingCards, refetchCards, errorCards } = useCardsQuery(props);
    const { updateCard, isUpdatingCard, createCard, isCreatingCard, deleteCard, isDeletingCard } =
        useCardsMutations();

    return {
        cards,
        isLoadingCards,
        refetchCards,
        errorCards,
        updateCard,
        isUpdatingCard,
        createCard,
        isCreatingCard,
        deleteCard,
        isDeletingCard,
    };
};