import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChartApi } from '@/app/api/chart/api';
import { Chart } from '@prisma/client';
import { useDataStateHandler } from '@/hooks/useDataStateHandler';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';

export const useChartsMutations = () => {
    const queryClient = useQueryClient();

    const updateChartMutation = useMutation<Chart, Error, { id: string; data: Partial<Chart> }>({
        mutationFn: ({ id, data }) => ChartApi.updateChart(id, data),
        onSuccess: (updatedChart) => {
            queryClient.invalidateQueries({ queryKey: ['charts'] });
            queryClient.setQueryData<Chart[]>(
                ['charts'],
                (oldCharts) =>
                    oldCharts?.map((chart) =>
                        chart.id === updatedChart.id ? updatedChart : chart
                    ) ?? []
            );
        },
    });

    const createChartMutation = useMutation<Chart, Error, Partial<Chart>>({
        mutationFn: (data) => ChartApi.createChart(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['charts'] });
        },
    });

    const deleteChartMutation = useMutation<void, Error, string>({
        mutationFn: (id) => ChartApi.deleteChart(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['charts'] });
        },
    });

    useDataStateHandler({
        isLoading: updateChartMutation.isPending,
        isError: updateChartMutation.isError,
        error: updateChartMutation.error,
        errorMessage: 'Error updating chart',
    });

    useDataStateHandler({
        isLoading: createChartMutation.isPending,
        isError: createChartMutation.isError,
        error: createChartMutation.error,
        errorMessage: 'Error creating chart',
    });

    useDataStateHandler({
        isLoading: deleteChartMutation.isPending,
        isError: deleteChartMutation.isError,
        error: deleteChartMutation.error,
        errorMessage: 'Error deleting chart',
    });

    const debouncedUpdateChart = useCallback(debounce(updateChartMutation.mutate, 500), [
        updateChartMutation.mutate,
    ]);

    const debouncedCreateChart = useCallback(debounce(createChartMutation.mutate, 500), [
        createChartMutation.mutate,
    ]);

    const debouncedDeleteChart = useCallback(debounce(deleteChartMutation.mutate, 500), [
        deleteChartMutation.mutate,
    ]);

    return {
        updateChart: debouncedUpdateChart,
        isUpdatingChart: updateChartMutation.isPending,
        createChart: debouncedCreateChart,
        isCreatingChart: createChartMutation.isPending,
        deleteChart: debouncedDeleteChart,
        isDeletingChart: deleteChartMutation.isPending,
    };
};