import React, { useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface CustomDropdownProps {
    options: { label: string; value: number }[];
    placeholder?: string;
    className?: string;
}

export default function CustomDropdown({
    options,
    placeholder = 'Select an option',
    className = '',
}: CustomDropdownProps) {
    const [selectedOption, setSelectedOption] = useState<{ label: string; value: string } | null>(
        null
    );

    const handleChange = (e: DropdownChangeEvent) => {
        setSelectedOption(e.value);
    };

    return (
        <Dropdown
            value={selectedOption}
            onChange={handleChange}
            options={options}
            optionLabel="label"
            placeholder={placeholder}
            className={`
                cursor-pointer inline-flex relative select-none border-round-2xl
                bg-gray-100  border border-gray-100 transition-colors duration-200 ease-in-out rounded-md 
                dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300
                w-full md:w-56
                hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]
                ${className}
            `}
            panelClassName="
                max-h-[200px] overflow-auto
                bg-white text-gray-700 border-0 rounded-md shadow-lg
                dark:bg-gray-900 dark:text-white/80
            "
        />
    );
}