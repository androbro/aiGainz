import { useQuery } from '@tanstack/react-query';
import { CardApi } from '@/app/api/card/api';
import { useDataFetching } from '@/hooks/useDataFetching';
import { Card } from '@prisma/client'; // Make sure to import the Card type

export interface UseQueryProps {
    filterObject?: { id: string; [key: string]: any } | undefined;
    active?: boolean;
    enabled?: boolean;
}

export const useCards = ({
    filterObject = undefined,
    active = false,
    enabled = true,
}: UseQueryProps) => {
    const errorMessage = 'Error Fetching Cards';

    const getFilteredCards = async (): Promise<Card[]> => {
        if (Object.keys(filterObject || {}).length === 0 || filterObject === undefined) {
            return await CardApi.getCards();
        }
        const card = await CardApi.getCard(filterObject.id);
        return card ? [card] : []; // Return an array even for a single card
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

    useDataFetching({
        isLoading: isLoadingCards,
        isError: isErrorCards,
        error: errorCards,
        errorMessage,
    });

    return { cards: cards || [], isLoadingCards, refetchCards, errorCards };
};