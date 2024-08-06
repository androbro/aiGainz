import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { parseNaturalLanguageDate } from '@/app/utils/dateParser';

interface CustomDropdownProps {
    options: { label: string; value: number }[];
    placeholder?: string;
    className?: string;
    onChange?: (days: number) => void;
    initialDays: number;
}

export default function CustomDropdown({
    options,
    placeholder = 'Select or type a period',
    className = '',
    onChange,
    initialDays,
}: CustomDropdownProps) {
    const [selectedDays, setSelectedDays] = useState<number>(initialDays);
    const [displayValue, setDisplayValue] = useState<string>('');

    useEffect(() => {
        setSelectedDays(initialDays);
        setDisplayValue(formatPeriod(initialDays));
    }, [initialDays]);

    const formatPeriod = (days: number): string => {
        if (days < 7) {
            return `Last ${days} day${days > 1 ? 's' : ''}`;
        } else if (days < 14) {
            return days === 7 ? 'Last week' : '~Last week';
        } else if (days < 31) {
            const weeks = Math.round(days / 7);
            return days % 7 === 0
                ? `Last ${weeks} week${weeks > 1 ? 's' : ''}`
                : `~Last ${weeks} week${weeks > 1 ? 's' : ''}`;
        } else if (days < 60) {
            return days === 30 ? 'Last month' : '~Last month';
        } else if (days < 365) {
            const months = Math.round(days / 30);
            return days % 30 === 0
                ? `Last ${months} month${months > 1 ? 's' : ''}`
                : `~Last ${months} month${months > 1 ? 's' : ''}`;
        } else {
            const years = Math.round(days / 365);
            return days === 365 ? 'Last year' : `~Last ${years} year${years > 1 ? 's' : ''}`;
        }
    };

    const handleChange = (e: DropdownChangeEvent) => {
        const value = e.value;

        if (typeof value === 'string') {
            const parsedDate = parseNaturalLanguageDate(value);
            if (parsedDate) {
                const days = Math.round((Date.now() - parsedDate.getTime()) / (1000 * 3600 * 24));
                setSelectedDays(days);
                setDisplayValue(formatPeriod(days));
                if (onChange) {
                    onChange(days);
                }
            } else {
                setDisplayValue(value);
            }
        } else if (typeof value === 'number') {
            setSelectedDays(value);
            setDisplayValue(formatPeriod(value));
            if (onChange) {
                onChange(value);
            }
        }
    };

    return (
        <Dropdown
            value={displayValue}
            onChange={handleChange}
            options={options}
            optionLabel="label"
            placeholder={placeholder}
            editable
            className={`border-round-2xl bg-gray-100 border-gray-100 ${className}`}
        />
    );
}