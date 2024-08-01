import { useGroupedDataMutations } from '@/hooks/commands/groupedData/useCardsMutations';
import {
    useGroupedDataQuery,
    UseGroupedDataQueryProps,
} from '@/hooks/queries/groupedData/useCardsQuery';

interface UseGroupedDataProps {
    period: Date;
    enabled?: boolean;
}

export const useGroupedData = ({ period, enabled = true }: UseGroupedDataProps) => {
    const { groupedData, isLoadingGroupedData, refetchGroupedData, errorGroupedData } =
        useGroupedDataQuery({ period, enabled });
    const {
        updateGroupedData,
        isUpdatingGroupedData,
        updatedGroupedData,
        createGroupedData,
        createdGroupedData,
        isCreatingGroupedData,
        deleteGroupedData,
        isDeletingGroupedData,
    } = useGroupedDataMutations();

    return {
        groupedData,
        isLoadingGroupedData,
        refetchGroupedData,
        errorGroupedData,
        updateGroupedData,
        isUpdatingGroupedData,
        createGroupedData,
        createdGroupedData,
        isCreatingGroupedData,
        deleteGroupedData,
        isDeletingGroupedData,
        updatedGroupedData,
    };
};