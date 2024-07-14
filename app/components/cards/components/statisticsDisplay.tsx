import React from 'react';

type StatisticsDisplayProps = {
    score: number;
    percentageChange: number;
};

export const StatisticsDisplay: React.FC<StatisticsDisplayProps> = ({
    score,
    percentageChange,
}) => {
    const textColorClass = percentageChange >= 0 ? 'text-green-500' : 'text-red-500';
    const iconClass = percentageChange >= 0 ? 'pi pi-arrow-up' : 'pi pi-arrow-down';
    const formattedScore = score.toFixed(0);
    const formattedPercentageChange = Math.abs(percentageChange).toFixed(0);

    return (
        <div className="font-bold text-lg mb-2">
            {formattedScore}
            <div className={`${textColorClass} mt-2 flex`}>
                <div>{percentageChange >= 0 ? '+' : '-'}</div>
                <div>{formattedPercentageChange}</div>
                <div>%</div>
                <div>
                    <i className={iconClass}></i>
                </div>
            </div>
        </div>
    );
};
