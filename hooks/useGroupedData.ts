import { useGroupedDataMutations } from '@/hooks/commands/groupedData/useCardsMutations';
import {
    useGroupedDataQuery,
    UseGroupedDataQueryProps,
} from '@/hooks/queries/groupedData/useCardsQuery';

export const useGroupedData = (props: UseGroupedDataQueryProps) => {
    const { groupedData, isLoadingGroupedData, refetchGroupedData, errorGroupedData } =
        useGroupedDataQuery(props);
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