import { useSettingsQuery, UseSettingsQueryProps } from '@/hooks/queries/settings/useSettingsQuery';
import { useSettingsMutations } from '@/hooks/commands/settings/useSettingsMutations';

export const useSettings = (props: UseSettingsQueryProps) => {
    const { settings, periodSetting, isLoadingSettings, refetchSettings, errorSettings } =
        useSettingsQuery(props);
    const {
        createSetting,
        createdSetting,
        deleteSetting,
        isCreatingSetting,
        isDeletingSetting,
        isUpdatingSetting,
        updateSetting,
        updatedSetting,
    } = useSettingsMutations();

    return {
        settings,
        periodSetting,
        isLoadingSettings,
        refetchSettings,
        errorSettings,
        createSetting,
        createdSetting,
        deleteSetting,
        isCreatingSetting,
        isDeletingSetting,
        isUpdatingSetting,
        updateSetting,
        updatedSetting,
    };
};