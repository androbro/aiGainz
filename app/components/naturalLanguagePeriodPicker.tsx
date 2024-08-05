import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { parse } from 'chrono-node';
import { Button } from 'primereact/button';

interface NaturalLanguagePeriodPickerProps {
    initialDate?: Date;
    onChange: (date: Date | null) => void;
    onSearch?: (date: Date) => void;
}

export const NaturalLanguagePeriodPicker: React.FC<NaturalLanguagePeriodPickerProps> = ({
    initialDate,
    onChange,
    onSearch,
}) => {
    const [inputValue, setInputValue] = useState<string | undefined>(initialDate?.toString());

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
        <div className="p-inputgroup flex-1">
            <InputText
                className="p-inputtext-sm"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a date (e.g., '7 months ago', 'last Friday')"
                tooltip={'Enter a date (e.g., "7 months ago", "last Friday")'}
                tooltipOptions={{ position: 'bottom' }}
            />
            <Button icon="pi pi-search" onClick={() => onSearch} />
        </div>
    );
};