import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { AddCardForm } from './addCardForm';
import { Card } from 'primereact/card';
import { CreateCard } from '@/app/api/card/interfaces';
import { ChartDataType } from '@prisma/client';
import { createSnakeFromName } from '@/app/functions/stringMorpher';

interface AddCardButtonProps {
    onCardAdd: (cardData: CreateCard) => void;
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ onCardAdd }) => {
    const [dialogVisible, setDialogVisible] = useState(false);

    const handleAddCard = (cardData: CreateCard) => {
        //make dataType camelCase SNAKE_CASE
        cardData.chart!.dataType = createSnakeFromName(cardData.chart!.dataType) as ChartDataType;
        onCardAdd(cardData);
        setDialogVisible(false);
    };

    return (
        <>
            <Card className="flex align-items-center justify-content-center h-full">
                <Button
                    icon="pi pi-plus"
                    className="p-button-rounded p-button-lg p-button-text"
                    onClick={() => setDialogVisible(true)}
                    aria-label="Add new card"
                />
            </Card>
            <Dialog
                header="Add New Card"
                visible={dialogVisible}
                style={{ width: '50vw' }}
                onHide={() => setDialogVisible(false)}
            >
                <AddCardForm onSubmit={handleAddCard} />
            </Dialog>
        </>
    );
};

export default AddCardButton;