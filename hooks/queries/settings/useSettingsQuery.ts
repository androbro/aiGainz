import { useQuery } from '@tanstack/react-query';
import { settingsApi } from '@/app/api/globalSetting/api';
import { GlobalSetting } from '@prisma/client';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';

export interface UseSettingsQueryProps {
    filterObject?: { id: string; [key: string]: any } | undefined;
    enabled?: boolean;
}

export const useSettingsQuery = ({
    filterObject = undefined,
    enabled = true,
}: UseSettingsQueryProps) => {
    const errorMessage = 'Error Fetching Settings';

    const getFilteredSettings = async (): Promise<GlobalSetting[]> => {
        if (Object.keys(filterObject || {}).length === 0 || filterObject === undefined) {
            return await settingsApi.getSettings();
        }
        const Setting = await settingsApi.getSetting(filterObject.id);
        return Setting ? [Setting] : [];
    };

    const {
        data: Settings,
        isLoading: isLoadingSettings,
        refetch: refetchSettings,
        error: errorSettings,
        isError: isErrorSettings,
    } = useQuery<GlobalSetting[], Error>({
        queryKey: ['SETTINGS'],
        queryFn: getFilteredSettings,
        retry: 0,
        enabled,
    });

    useDataStateHandler({
        isLoading: isLoadingSettings,
        isError: isErrorSettings,
        error: errorSettings,
        errorMessage,
    });

    return { settings: Settings || [], isLoadingSettings, refetchSettings, errorSettings };
};