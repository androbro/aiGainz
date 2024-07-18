import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { AddCardForm } from './addCardForm';

interface AddCardButtonProps {
    onCardAdd: (cardData: any) => void;
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ onCardAdd }) => {
    const [dialogVisible, setDialogVisible] = useState(false);

    const handleAddCard = (cardData: any) => {
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