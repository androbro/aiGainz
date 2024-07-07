import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export interface smallStatsCardProps {
    title: string;
    data: smallStatsCardData;
}

interface smallStatsCardData {
    prevScore: number;
    currentScore: number;
}
export default function SmallStatsCard({ title, data }: smallStatsCardProps) {
    const [difference, setDifference] = useState<number>(0);
    const isPositive = data.currentScore >= data.prevScore;

    useEffect(() => {
        //calculate diff in percentage and if negative, make positive
        if (data.prevScore > 0) {
            const diff = (data.currentScore - data.prevScore) / data.prevScore;
            const diffPercentage = Math.abs(diff) * 100;
            setDifference(diffPercentage);
        }
    }, [data.currentScore, data.prevScore]);

    const Header = <div className="pt-4 pl-4 font-bold black">{title}</div>;
    return (
        <Card header={Header}>
            <div className="font-bold black text-4xl">{data.currentScore}</div>
            <div className={`${isPositive ? 'text-green-500' : 'text-red-500'} mt-2 flex`}>
                <div>{isPositive ? '+' : '-'}</div>
                <div>{difference}</div>
                <div>%</div>
                <div>{isPositive ? <i className="pi pi-arrow-up"></i> : <i className="pi pi-arrow-down"></i>}</div>
            </div>
        </Card>
    );
}
