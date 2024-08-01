import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { TreeSelect, TreeSelectSelectionKeysType } from 'primereact/treeselect';
import { Button } from 'primereact/button';
import { ChartDataType } from '@prisma/client';
import { CreateCard } from '@/app/api/card/interfaces';
import { CreateChart } from '@/app/api/chart/interfaces';
import { useGroupedData } from '@/hooks/useGroupedData';

interface AddCardFormProps {
    onSubmit: (cardData: CreateCard) => void;
}

export const AddCardForm: React.FC<AddCardFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [period, setPeriod] = useState<Date | null>(null);
    const [selectedDataSource, setSelectedDataSource] = useState<string | undefined>(undefined);
    const [selectedGroup, setSelectedGroup] = useState<ChartDataType | undefined>(undefined);
    const [selectedValue, setSelectedValue] = useState<
        string | TreeSelectSelectionKeysType | TreeSelectSelectionKeysType[] | undefined
    >(undefined);

    const { groupedData } = useGroupedData({
        enabled: !!period,
        period: period || new Date(),
    });

    const handleSubmit = () => {
        if (!name || !period || !selectedDataSource || !selectedGroup) {
            console.error('Missing required fields');
            return;
        }
        const newChart: CreateChart = {
            label: name,
            fill: false,
            borderColor: '#4B91F1',
            tension: 0.4,
            pointRadius: 2,
            showLegend: true,
            showXAxis: true,
            showYAxis: true,
            maintainAspectRatio: false,
            responsive: true,
            width: null,
            height: 75,
            dataType: selectedGroup,
            dataSourceId: parseInt(selectedDataSource),
        };
        const newCard: CreateCard = {
            title: name,
            period: period,
            chart: newChart,
        };
        onSubmit(newCard);
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
                value={selectedValue}
                options={groupedData}
                onChange={(e) => {
                    if (!e.value) return;
                    const [group, dataSource] = (e.value as string).split('_');
                    setSelectedGroup(group as ChartDataType);
                    setSelectedDataSource(dataSource);
                    setSelectedValue(e.value);
                }}
                filter
                placeholder="Select Data Source"
                className="w-full"
            />
            <Button label="Create Card" onClick={handleSubmit} />
        </div>
    );
};