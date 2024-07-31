import { useQuery } from '@tanstack/react-query';
import { GroupedDataApi } from '@/app/api/groupedData/api';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';
import { GroupedData } from '@/app/api/groupedData/interfaces';

export interface UseGroupedDataQueryProps {
    filterObject?: { id: string; [key: string]: any } | undefined;
    enabled?: boolean;
}

export const useGroupedDataQuery = ({
    filterObject = undefined,
    enabled = true,
}: UseGroupedDataQueryProps) => {
    const errorMessage = 'Error Fetching GroupedData';

    const getFilteredGroupedData = async (): Promise<GroupedData[]> => {
        if (Object.keys(filterObject || {}).length === 0 || filterObject === undefined) {
            return await GroupedDataApi.getGroupedData();
        }
        const groupedData = await GroupedDataApi.getGroupedDataWhereRecordsAreFound();
        return groupedData ? groupedData : [];
    };

    const {
        data: groupedData,
        isLoading: isLoadingGroupedData,
        refetch: refetchGroupedData,
        error: errorGroupedData,
        isError: isErrorGroupedData,
    } = useQuery<GroupedData[], Error>({
        queryKey: ['groupedData'],
        queryFn: getFilteredGroupedData,
        retry: 0,
        enabled,
    });

    useDataStateHandler({
        isLoading: isLoadingGroupedData,
        isError: isErrorGroupedData,
        error: errorGroupedData,
        errorMessage,
    });

    return {
        groupedData: groupedData || [],
        isLoadingGroupedData,
        refetchGroupedData,
        errorGroupedData,
    };
};