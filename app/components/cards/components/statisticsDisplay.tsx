import React, { useEffect, useState } from 'react';

type StatisticsDisplayProps = {
    score: number;
    percentageChange?: number;
};

export const StatisticsDisplay: React.FC<StatisticsDisplayProps> = ({
    score,
    percentageChange,
}) => {
    const [textColorClass, setTextColorClass] = useState('');
    const [iconClass, setIconClass] = useState('');
    const [formattedScore, setFormattedScore] = useState('');
    const [formattedPercentageChange, setFormattedPercentageChange] = useState('');

    useEffect(() => {
        if (percentageChange === undefined) {
            return;
        }
        // setTextColorClass(percentageChange >= 0 ? 'text-green-500' : 'text-red-500');
        setTextColorClass('text-0');
        setIconClass(percentageChange >= 0 ? 'pi pi-arrow-up' : 'pi pi-arrow-down');
        setFormattedPercentageChange(Math.abs(percentageChange).toFixed(0));
        setFormattedScore(score.toFixed(0));
    }, [score, percentageChange]);

    return (
        <div className="text-0ds">
            <div className="text-2xl" style={{ fontWeight: 600 }}>
                {formattedScore}
            </div>
            <div className="flex text-sm">
                <div>{percentageChange! >= 0 ? '+' : '-'}</div>
                <div>{formattedPercentageChange}</div>
                <div>%</div>
                {/*<div>*/}
                {/*    <i className={iconClass}></i>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};