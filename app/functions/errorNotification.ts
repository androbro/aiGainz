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