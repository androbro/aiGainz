import { useErrorNotification } from '@/hooks/notifications/useErrorNotification';
import { useLoading } from '@/hooks/useLoading';
import { CustomError } from '@/app/functions/notifications';
import { useLoaderStore } from '@/app/store/loaderStore';

interface UseDataStateHandlerParams {
    isLoading: boolean;
    isError: boolean;
    error: CustomError | null;
    errorMessage: string;
}

export const useDataStateHandler = ({
    isLoading,
    isError,
    error,
    errorMessage,
}: UseDataStateHandlerParams) => {
    const { setIsLoading } = useLoaderStore();
    useErrorNotification(isError, errorMessage, error);
    useLoading(isLoading, setIsLoading);
};