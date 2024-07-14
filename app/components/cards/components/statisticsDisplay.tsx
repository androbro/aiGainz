import React from 'react';

type StatisticsDisplayProps = {
    score: number;
    percentageChange: number;
};

export const StatisticsDisplay: React.FC<StatisticsDisplayProps> = ({
    score,
    percentageChange,
}) => (
    <div className="font-bold text-4xl mb-2">
        {score.toFixed(2)}
        <div className={`mt-2 flex ${percentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            <span>{percentageChange.toFixed(2)}%</span>
            <i className={`pi ${percentageChange >= 0 ? 'pi-arrow-up' : 'pi-arrow-down'} ml-2`}></i>
        </div>
    </div>
);
