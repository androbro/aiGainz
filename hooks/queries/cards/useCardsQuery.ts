import { useQuery } from '@tanstack/react-query';
import { CardApi } from '@/app/api/card/api';
import { Card } from '@prisma/client';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';

export interface UseCardsQueryProps {
    id?: number | undefined;
    type?: string;
    enabled?: boolean;
}

export const useCardsQuery = ({
    id = undefined,
    type = undefined,
    enabled = true,
}: UseCardsQueryProps) => {
    const errorMessage = 'Error Fetching Cards';

    const getFilteredCards = async (): Promise<Card[]> => {
        if (id === undefined) {
            if (type) {
                return await CardApi.getCardsByType(type);
            }
            return await CardApi.getCards();
        }
        const card = await CardApi.getCard(id);
        return card ? [card] : [];
    };

    const {
        data: cards,
        isLoading: isLoadingCards,
        refetch: refetchCards,
        error: errorCards,
        isError: isErrorCards,
        isFetched: isFetchedCards,
    } = useQuery<Card[], Error>({
        queryKey: ['cards'],
        queryFn: getFilteredCards,
        retry: 0,
        enabled,
    });

    useDataStateHandler({
        isLoading: isLoadingCards,
        isError: isErrorCards,
        error: errorCards,
        errorMessage,
    });

    return { cards: cards || [], isLoadingCards, refetchCards, errorCards, isFetchedCards };
};