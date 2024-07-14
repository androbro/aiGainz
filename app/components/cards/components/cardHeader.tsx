import React from 'react';

type CardHeaderProps = {
    title: string;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ title }) => (
    <div className="col-12">
        <div className="pt-4 pl-4 font-bold text-xl">{title}</div>
    </div>
);
