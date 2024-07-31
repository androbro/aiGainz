import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GroupedDataApi } from '@/app/api/groupedData/api';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';
import { infoNotification, successNotification } from '@/app/functions/notifications';
import { CreateGroupedData, GroupedData } from '@/app/api/groupedData/interfaces';

export const useGroupedDataMutations = () => {
    const queryClient = useQueryClient();

    const updateGroupedDataMutation = useMutation<
        GroupedData,
        Error,
        { id: string; data: Partial<GroupedData> }
    >({
        mutationFn: ({ id, data }) => {
            const groupedDataData: Partial<GroupedData> & { id?: number } = {
                ...data,
                id: parseInt(id),
            };
            if (isGroupedData(groupedDataData)) {
                return GroupedDataApi.updateGroupedData(id, groupedDataData);
            } else {
                return Promise.reject(new Error('Invalid data'));
            }
        },
        onSuccess: (updatedGroupedData) => {
            //fetch all cached data
            console.log('updatedGroupedData', updatedGroupedData);
            infoNotification('GroupedData has been updated', 'success');
        },
    });

    function isGroupedData(
        groupedData: Partial<GroupedData> & { id?: number }
    ): groupedData is GroupedData {
        return groupedData.id !== undefined;
    }

    const createGroupedDataMutation = useMutation<GroupedData, Error, CreateGroupedData>({
        mutationFn: (data) => GroupedDataApi.createGroupedData(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['groupedDatas'] });
            successNotification('GroupedData has been created', 'success');
        },
    });

    const deleteGroupedDataMutation = useMutation<void, Error, string>({
        mutationFn: (id) => GroupedDataApi.deleteGroupedData(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['groupedDatas'] });
            infoNotification('GroupedData has been deleted', 'success');
        },
    });

    useDataStateHandler({
        isLoading: updateGroupedDataMutation.isPending,
        isError: updateGroupedDataMutation.isError,
        error: updateGroupedDataMutation.error,
        errorMessage: 'Error updating groupedData',
    });

    useDataStateHandler({
        isLoading: createGroupedDataMutation.isPending,
        isError: createGroupedDataMutation.isError,
        error: createGroupedDataMutation.error,
        errorMessage: 'Error creating groupedData',
    });

    useDataStateHandler({
        isLoading: deleteGroupedDataMutation.isPending,
        isError: deleteGroupedDataMutation.isError,
        error: deleteGroupedDataMutation.error,
        errorMessage: 'Error deleting groupedData',
    });

    const debouncedUpdateGroupedData = useCallback(
        debounce(updateGroupedDataMutation.mutate, 500),
        [updateGroupedDataMutation.mutate]
    );

    const debouncedCreateGroupedData = useCallback(
        debounce(createGroupedDataMutation.mutate, 500),
        [createGroupedDataMutation.mutate]
    );

    const debouncedDeleteGroupedData = useCallback(
        debounce(deleteGroupedDataMutation.mutate, 500),
        [deleteGroupedDataMutation.mutate]
    );

    return {
        updateGroupedData: debouncedUpdateGroupedData,
        isUpdatingGroupedData: updateGroupedDataMutation.isPending,
        updatedGroupedData: updateGroupedDataMutation.data,
        createGroupedData: debouncedCreateGroupedData,
        isCreatingGroupedData: createGroupedDataMutation.isPending,
        createdGroupedData: createGroupedDataMutation.data,
        deleteGroupedData: debouncedDeleteGroupedData,
        isDeletingGroupedData: deleteGroupedDataMutation.isPending,
    };
};