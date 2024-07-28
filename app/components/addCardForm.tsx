import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { TreeSelect, TreeSelectSelectionKeysType } from 'primereact/treeselect';
import { Button } from 'primereact/button';
import { ChartDataType } from '@prisma/client';
import { CreateCard } from '@/app/api/card/interfaces';
import { CreateChart, ExtendedChart } from '@/app/api/chart/interfaces';
import { string } from 'prop-types';

interface AddCardFormProps {
    onSubmit: (cardData: CreateCard) => void;
}

export const AddCardForm: React.FC<AddCardFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [period, setPeriod] = useState<Date | null>(null);
    const [selectedDataSource, setSelectedDataSource] = useState<string | undefined>(undefined);
    const [selectedGroup, setSelectedGroup] = useState<ChartDataType | undefined>(undefined);
    const [groupedData, setGroupedData] = useState([]);
    const [selectedValue, setSelectedValue] = useState<
        string | TreeSelectSelectionKeysType | TreeSelectSelectionKeysType[] | undefined
    >(undefined);

    useEffect(() => {
        const fetchGroupedData = async () => {
            try {
                const response = await fetch('/api/groupedData');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Grouped data:', data);
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
            height: 200,
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
                    // e.value is ChartDataType_DataSourceId (e.g. "exercise_2") so we need to split it
                    if (!e.value) return;
                    const [group, dataSource] = e.value.toString().split('_');
                    console.log('Selected group:', group);
                    console.log('Selected data source:', dataSource);
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