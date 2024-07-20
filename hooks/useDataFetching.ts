import { useErrorNotification } from '@/hooks/useErrorNotification';
import { useLoading } from '@/hooks/useLoading';
import { CustomError } from '@/app/functions/errorNotification';
import { useLoaderStore } from '@/app/store/loaderStore';

interface UseDataFetchingParams {
    isLoading: boolean;
    isError: boolean;
    error: CustomError | null;
    errorMessage: string;
}

export const useDataFetching = ({
    isLoading,
    isError,
    error,
    errorMessage,
}: UseDataFetchingParams) => {
    const { setIsLoading } = useLoaderStore();
    useErrorNotification(isError, errorMessage, error);
    useLoading(isLoading, setIsLoading);
};