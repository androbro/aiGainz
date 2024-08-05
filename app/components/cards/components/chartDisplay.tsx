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
                        // borderColor: chartData.borderColor || undefined,
                        // tension: chartData.tension,
                        // pointRadius: chartData.pointRadius,
                        tension: 0.4,
                        pointRadius: 0,
                        borderColor: '#fff',
                    },
                ],
            });

            // Use this line to switch between database options and preset configurations
            const usePresetConfigs = true; // Set to false to use database options

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
        <div className="mr-2">
            {chartData.dataPoints?.length === 0 && <div>No data available</div>}
            <Chart
                type="line"
                data={data}
                options={options}
                width={chartData.width?.toString() || '100%'}
                height={chartData.height?.toString() || '75px'}
            />
        </div>
    );
};