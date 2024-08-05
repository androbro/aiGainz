import React from 'react';

type CardHeaderProps = {
    title: string;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ title }) => (
    <div className="col-12 ml-3">
        <div className="font-bold text-md text-0">{title}</div>
    </div>
);