import React from 'react';

type CardHeaderProps = {
    title: string;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ title }) => (
    <div className="col-12 ml-3">
        <div className="text-md text-0" style={{ fontWeight: 600 }}>
            {title}
        </div>
    </div>
);