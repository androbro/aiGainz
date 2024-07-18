import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { Button } from 'primereact/button';

interface AddCardFormProps {
    onSubmit: (cardData: any) => void;
}

export const AddCardForm: React.FC<AddCardFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [period, setPeriod] = useState<Date | null>(null);
    const [selectedDataSource, setSelectedDataSource] = useState<string | undefined>(undefined);
    const [groupedData, setGroupedData] = useState([]);

    useEffect(() => {
        const fetchGroupedData = async () => {
            try {
                const response = await fetch('/api/groupedData');
                if (response.ok) {
                    const data = await response.json();
                    setGroupedData(data);
                } else {
                    console.error('Failed to fetch grouped data');
                }
            } catch (error) {
                console.error('Error fetching grouped data:', error);
            }
        };

        fetchGroupedData();
    }, []);

    const handleSubmit = () => {
        if (name && period && selectedDataSource) {
            onSubmit({
                name,
                period,
                dataSource: selectedDataSource,
            });
        } else {
            // Handle validation error
            console.error('Please fill all fields');
        }
    };

    const handleDataSourceChange = (e: TreeSelectChangeEvent) => {
        setSelectedDataSource(e.value as string | undefined);
    };

    return (
        <div className="flex flex-column gap-2">
            <InputText
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Card Name"
            />
            <Calendar
                value={period}
                onChange={(e) => setPeriod(e.value as Date)}
                showIcon
                placeholder="Select Period"
            />
            <TreeSelect
                value={selectedDataSource}
                options={groupedData}
                onChange={handleDataSourceChange}
                filter
                placeholder="Select Data Source"
                className="w-full"
            />
            <Button label="Create Card" onClick={handleSubmit} />
        </div>
    );
};