import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { parse } from 'chrono-node';

interface NaturalLanguagePeriodPickerProps {
    onChange: (date: Date | null) => void;
}

export const NaturalLanguagePeriodPicker: React.FC<NaturalLanguagePeriodPickerProps> = ({
    onChange,
}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            const parsedDate = parse(value, new Date(), { forwardDate: false })[0]?.start.date();
            if (parsedDate) {
                onChange(parsedDate);
            }
        } else {
            onChange(null);
        }
    };

    return (
        <InputText
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a date (e.g., '7 months ago', 'last Friday')"
        />
    );
};