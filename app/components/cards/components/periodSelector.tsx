import React from 'react';
import { Calendar } from 'primereact/calendar';
import CustomInplace from '@/app/components/customInplace';

type PeriodSelectorProps = {
    months: number;
    period: Date | null;
    onChange: (date: Date | null) => void;
    isMobile: boolean;
};

export const PeriodSelector: React.FC<PeriodSelectorProps> = ({
    months,
    period,
    onChange,
    isMobile,
}) => (
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
                value={period}
                onChange={(e) => onChange(e.value as Date | null)}
                touchUI={isMobile}
            />
        }
        escapeUsingEscKey
    />
);
