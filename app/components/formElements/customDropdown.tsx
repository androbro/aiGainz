import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { formatDate, parseNaturalLanguageDate } from '@/app/utils/dateParser';

interface CustomDropdownProps {
    options: { label: string; value: number }[];
    placeholder?: string;
    className?: string;
    onChange?: (date: Date | null) => void;
    initialDate?: Date;
}

export default function CustomDropdown({
    options,
    placeholder = 'Select or type a date',
    className = '',
    onChange,
    initialDate,
}: CustomDropdownProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    useEffect(() => {
        if (initialDate) {
            setInputValue(formatDate(initialDate));
            setSelectedDate(initialDate);
        }
    }, [initialDate]);

    const handleChange = (e: DropdownChangeEvent) => {
        const value = e.value;
        setInputValue(value);

        if (typeof value === 'string') {
            const parsedDate = parseNaturalLanguageDate(value);
            setSelectedDate(parsedDate);
            if (onChange) {
                onChange(parsedDate);
            }
        } else if (value && typeof value === 'number') {
            // Handle selection from predefined options
            const date = new Date();
            date.setDate(date.getDate() - value);
            setSelectedDate(date);
            setInputValue(formatDate(date));
            if (onChange) {
                onChange(date);
            }
        }
    };

    return (
        <Dropdown
            value={inputValue}
            onChange={handleChange}
            options={options}
            optionLabel="label"
            placeholder={placeholder}
            editable
            className={`
                cursor-pointer inline-flex relative select-none border-round-2xl
                bg-gray-100  border border-gray-100 transition-colors duration-200 ease-in-out rounded-md 
                dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300
                w-full md:w-56
                hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]
                ${className}
            `}
        />
    );
}