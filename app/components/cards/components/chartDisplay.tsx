import React, { useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { chartTypeConfigs } from '@/app/config/chartTypeConfigs';
import { ExtendedChart } from '@/app/api/chart/interfaces';

interface ChartDisplayProps {
    chartData: ExtendedChart;
}

export const ChartDisplay: React.FC<ChartDisplayProps> = ({ chartData }) => {
    const [data, setData] = React.useState<any>(null);
    const [options, setOptions] = React.useState<any>(null);

    useEffect(() => {
        if (chartData && chartData.dataPoints && chartData.dataPoints.length > 0) {
            setData({
                labels:
                    chartData.dataPoints?.map((dp) => new Date(dp.date).toLocaleDateString()) || [],
                datasets: [
                    {
                        label: chartData.label,
                        data: chartData.dataPoints?.map((dp) => dp.score) || [],
                        fill: chartData.fill,
                        borderColor: chartData.borderColor || undefined,
                        tension: chartData.tension,
                        pointRadius: chartData.pointRadius,
                    },
                ],
            });

            // Use this line to switch between database options and preset configurations
            const usePresetConfigs = false; // Set to false to use database options

            setOptions(
                usePresetConfigs
                    ? chartTypeConfigs[chartData.dataType]
                    : {
                          plugins: {
                              legend: {
                                  display: chartData.showLegend,
                              },
                          },
                          scales: {
                              x: {
                                  display: chartData.showXAxis,
                              },
                              y: {
                                  display: chartData.showYAxis,
                              },
                          },
                          maintainAspectRatio: chartData.maintainAspectRatio,
                          responsive: chartData.responsive,
                      }
            );
        }
    }, [chartData]);

    return (
        <div>
            {chartData.dataPoints?.length! <= 1 ? (
                <div>No data available</div>
            ) : (
                <Chart
                    type="line"
                    data={data}
                    options={options}
                    width={chartData.width?.toString() || '100%'}
                    height={chartData.height?.toString() || '75px'}
                />
            )}
        </div>
    );
};