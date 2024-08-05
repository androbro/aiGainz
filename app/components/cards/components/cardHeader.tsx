import React from 'react';

type CardHeaderProps = {
    title: string;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ title }) => (
    <div>
        <div className="text-sm text-0" style={{ fontWeight: 600 }}>
            {title}
        </div>
    </div>
);