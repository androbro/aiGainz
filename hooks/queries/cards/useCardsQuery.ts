import { useQuery } from '@tanstack/react-query';
import { CardApi } from '@/app/api/card/api';
import { Card } from '@prisma/client';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';

export interface UseCardsQueryProps {
    filterObject?: { id: string; [key: string]: any } | undefined;
    enabled?: boolean;
}

export const useCardsQuery = ({ filterObject = undefined, enabled = true }: UseCardsQueryProps) => {
    const errorMessage = 'Error Fetching Cards';

    const getFilteredCards = async (): Promise<Card[]> => {
        if (Object.keys(filterObject || {}).length === 0 || filterObject === undefined) {
            return await CardApi.getCards();
        }
        const card = await CardApi.getCard(filterObject.id);
        return card ? [card] : [];
    };

    const {
        data: cards,
        isLoading: isLoadingCards,
        refetch: refetchCards,
        error: errorCards,
        isError: isErrorCards,
    } = useQuery<Card[], Error>({
        queryKey: ['cards', filterObject],
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

    return { cards: cards || [], isLoadingCards, refetchCards, errorCards };
};