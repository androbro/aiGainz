import { useMutation, useQueryClient } from '@tanstack/react-query';
import { infoNotification, successNotification } from '@/app/functions/notifications';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';
import { useCallback } from 'react';
import { GlobalSetting } from '@prisma/client';
import debounce from 'lodash/debounce';
import { settingsApi } from '@/app/api/globalSettings/api';

export const useSettingsMutations = () => {
    const queryClient = useQueryClient();

    const updateSettingMutation = useMutation<GlobalSetting, Error, { data: GlobalSetting }>({
        mutationFn: ({ data }) => {
            return settingsApi.updateSetting(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['SETTINGS'] });
            infoNotification('Setting has been updated', 'success');
        },
    });

    const createSettingMutation = useMutation<GlobalSetting, Error, GlobalSetting>({
        mutationFn: (data) => settingsApi.createSetting(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['SETTINGS'] });
            successNotification('Setting has been created', 'success');
        },
    });

    const deleteSettingMutation = useMutation<void, Error, string>({
        mutationFn: (id) => settingsApi.deleteSetting(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['SETTINGS'] });
            infoNotification('Setting has been deleted', 'success');
        },
    });

    useDataStateHandler({
        isLoading: updateSettingMutation.isPending,
        isError: updateSettingMutation.isError,
        error: updateSettingMutation.error,
        errorMessage: 'Error updating setting',
    });

    useDataStateHandler({
        isLoading: createSettingMutation.isPending,
        isError: createSettingMutation.isError,
        error: createSettingMutation.error,
        errorMessage: 'Error creating setting',
    });

    useDataStateHandler({
        isLoading: deleteSettingMutation.isPending,
        isError: deleteSettingMutation.isError,
        error: deleteSettingMutation.error,
        errorMessage: 'Error deleting setting',
    });

    const debouncedUpdateSetting = useCallback(debounce(updateSettingMutation.mutate, 500), [
        updateSettingMutation.mutate,
    ]);

    const debouncedCreateSetting = useCallback(debounce(createSettingMutation.mutate, 500), [
        createSettingMutation.mutate,
    ]);

    const debouncedDeleteSetting = useCallback(debounce(deleteSettingMutation.mutate, 500), [
        deleteSettingMutation.mutate,
    ]);

    return {
        updateSetting: debouncedUpdateSetting,
        isUpdatingSetting: updateSettingMutation.isPending,
        updatedSetting: updateSettingMutation.data,
        createSetting: debouncedCreateSetting,
        isCreatingSetting: createSettingMutation.isPending,
        createdSetting: createSettingMutation.data,
        deleteSetting: debouncedDeleteSetting,
        isDeletingSetting: deleteSettingMutation.isPending,
    };
};