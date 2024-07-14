import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import CustomInplace from '@/app/components/customInplace';

type PeriodSelectorProps = {
    months: number;
    period: string | Date | null;
    onChange: (date: Date | null) => void;
    isMobile: boolean;
};

export const PeriodSelector: React.FC<PeriodSelectorProps> = ({
    months,
    period,
    onChange,
    isMobile,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    // Parse the period to ensure it's a valid Date object
    const parsedPeriod = period ? new Date(period) : null;

    const handleDateChange = (date: Date | null) => {
        onChange(date);
        setIsEditing(false);
    };

    return (
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
                    value={parsedPeriod}
                    onChange={(e) => handleDateChange(e.value as Date | null)}
                    touchUI={isMobile}
                    dateFormat="yy-mm-dd"
                />
            }
            isEditing={isEditing}
            onEdit={setIsEditing}
            escapeUsingEscKey
        />
    );
};
