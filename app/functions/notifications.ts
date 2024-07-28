import { showToast } from '@/app/providers/reactQueryProvider';
import { TOAST_SEVERITY } from '@/app/constants/ui';

export interface CustomError extends Error {
    status?: number;
}
export const errorNotification = (
    isError: boolean,
    title: string,
    error: CustomError | null = null
) => {
    if (isError && error) {
        showToast(TOAST_SEVERITY.ERROR, `${error.status}: ${title}`, error.message, 5000);
    }
};

export const successNotification = (title: string, message: string) => {
    showToast(TOAST_SEVERITY.SUCCESS, title, message, 5000);
};

export const infoNotification = (title: string, message: string) => {
    showToast(TOAST_SEVERITY.INFO, title, message, 5000);
};

export const warningNotification = (title: string, message: string) => {
    showToast(TOAST_SEVERITY.WARN, title, message, 5000);
};