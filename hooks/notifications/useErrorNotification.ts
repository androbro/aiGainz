import { useEffect } from 'react';
import { CustomError, errorNotification } from '@/app/functions/notifications';

export const useErrorNotification = (
    isError: boolean,
    title: string,
    error: CustomError | null = null
) => {
    useEffect(() => {
        errorNotification(isError, title, error);
    }, [isError]);
};