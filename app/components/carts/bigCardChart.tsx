import React, {useEffect, useRef, useState} from 'react';
import {Card} from 'primereact/card';
import {Chart} from 'primereact/chart';
import {useResizeObserver} from '@/hooks/useResizeObserver';
import {Inplace, InplaceContent, InplaceDisplay} from 'primereact/inplace';
import {InputText} from 'primereact/inputtext';

export interface BigStatsCardProps {
    body: CardBody;
    changedChart: (chartData: CardBody) => void;
}

export interface CardBody {
    title: string;
    data: BigStatsCardData;
    chartsData: ChartData;
}

export interface ChartData {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string | undefined;
    tension: number;
    pointRadius: number;
}

interface BigStatsCardData {
    prevScore: number;
    currentScore: number;
}

export default function BigCardChart({body, changedChart}: BigStatsCardProps) {
    const [difference, setDifference] = useState<number>(0);
    const isPositive = body.data.currentScore >= body.data.prevScore;
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const chartContainerRef = useRef(null);
    const {width, height} = useResizeObserver(chartContainerRef);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        body.chartsData.borderColor = isPositive
            ? documentStyle.getPropertyValue('--green-500')
            : documentStyle.getPropertyValue('--red-500');

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [body.chartsData],
        };

        const options = {
            plugins: {
                legend: {display: false},
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                    },
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        };

        setChartData(data);
        setChartOptions(options);
    }, [body.chartsData, isPositive]);

    useEffect(() => {
        if (body.data.prevScore > 0) {
            const diff = (body.data.currentScore - body.data.prevScore) / body.data.prevScore;
            const diffPercentage = Math.abs(diff) * 100;
            setDifference(diffPercentage);
        }
    }, [body.data.currentScore, body.data.prevScore]);

    const Header = (
        <div className="pt-4 pl-4 font-bold black">
            <Inplace closable>
                <InplaceDisplay>{body.title || 'Click to Edit'}</InplaceDisplay>
                <InplaceContent>
                    <InputText
                        value={body.title}
                        onChange={(e) =>
                            changedChart({
                                title: e.target.value,
                                chartsData: body.chartsData,
                                data: body.data,
                            })
                        }
                        autoFocus
                    />
                </InplaceContent>
            </Inplace>
        </div>
    );

    return (
        <Card header={Header}>
            <div className="grid">
                <div className="align-content-center col-3 pb-0 pt-0">
                    <div className="font-bold black text-4xl">{body.data.currentScore}KG</div>
                    <div>
                        <div
                            className={`${isPositive ? 'text-green-500' : 'text-red-500'} mt-2 flex`}
                        >
                            <div>{isPositive ? '+' : '-'}</div>
                            <div>{difference.toFixed(2)}</div>
                            <div>%</div>
                            <div>
                                {isPositive ? (
                                    <i className="pi pi-arrow-up"></i>
                                ) : (
                                    <i className="pi pi-arrow-down"></i>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9" ref={chartContainerRef}>
                    <Chart
                        type="line"
                        data={chartData}
                        options={chartOptions}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </Card>
    );
}