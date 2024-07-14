import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Chart as ChartComponent } from 'primereact/chart';
import CardSkeleton from '@/app/components/cardSkeleton';
import { Calendar } from 'primereact/calendar';
import { useMobileChecker } from '@/hooks/useMobileChecker';
import CustomInplace from '@/app/components/customInplace';
import { CardInformation } from '@/app/interfaces/card';

export default function SmallStatsCard(props: CardInformation) {
    const [cardInfo, setCardInfo] = useState<CardInformation>(props);
    const [months, setMonths] = useState<number>(1);
    const chartContainerRef = useRef(null);
    const isMobile = useMobileChecker();

    // useEffect(() => {
    //     if (cardInfo.period instanceof Date) {
    //         const current = new Date();
    //         const months =
    //             (cardInfo.period.getFullYear() - current.getFullYear()) * 12 +
    //             cardInfo.period.getMonth() -
    //             current.getMonth();
    //         setMonths(Math.abs(months));
    //     }
    //     // const data:  CardInformation = { period: selectedDate, title: title, data: chartData, chart, id};
    //     // updateChartToDatabase(data);
    // }, [cardInfo.period]);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        if (cardInfo.data) {
            cardInfo.chart.borderColor =
                cardInfo.data.percentageChange >= 0
                    ? documentStyle.getPropertyValue('--green-500')
                    : documentStyle.getPropertyValue('--red-500');

            const chartData = {
                labels: cardInfo.data.dataPoints,
                datasets: [cardInfo.chart],
            };
            setCardInfo({
                ...cardInfo,
                data: cardInfo.data,
                chart: { ...cardInfo.chart, data: chartData },
            });
        }
    }, []);

    const updateChartToDatabase = async (data: CardInformation) => {
        try {
            const response = await fetch(`/api/card/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Failed to update card data');
            }
        } catch (error) {
            console.error('Error updating card data:', error);
        }
    };

    const Header = <div className="pt-4 pl-4 font-bold black">{cardInfo.title}</div>;

    return (
        <>
            {cardInfo.data ? (
                <Card header={Header}>
                    <div className="grid">
                        <div className="align-content-center col-6 pb-0 pt-0">
                            <div className="font-bold black text-4xl">
                                {cardInfo.data?.totalScore.toFixed(0)}
                            </div>
                            <div>
                                <div>
                                    <CustomInplace
                                        display={
                                            <>
                                                {'Last '}
                                                {months > 1 && months}
                                                {` month${months > 1 ? 's' : ''}`}
                                            </>
                                        }
                                        content={
                                            <Calendar
                                                className="max-w-7rem"
                                                value={cardInfo.period}
                                                onChange={(e) =>
                                                    setCardInfo({ ...cardInfo, period: e.value })
                                                }
                                                touchUI={isMobile}
                                            />
                                        }
                                        escapeUsingEscKey
                                    />
                                </div>
                                <div
                                    className={`${cardInfo.data?.percentageChange >= 0 ? 'text-green-500' : 'text-red-500'} mt-2 flex`}
                                >
                                    <div>{cardInfo.data?.percentageChange.toFixed(0)}</div>
                                    <div>%</div>
                                    <div>
                                        {cardInfo.data?.percentageChange >= 0 ? (
                                            <i className="pi pi-arrow-up"></i>
                                        ) : (
                                            <i className="pi pi-arrow-down"></i>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-6 "
                            ref={chartContainerRef}
                            style={{ height: `${cardInfo.chart.settings.height}px` }}
                        >
                            <ChartComponent
                                type="line"
                                data={cardInfo.chart}
                                options={cardInfo.chart.settings}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </Card>
            ) : (
                <CardSkeleton />
            )}
        </>
    );
}
