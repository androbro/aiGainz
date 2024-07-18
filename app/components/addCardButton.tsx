import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

interface AddCardButtonProps {
    onClick: () => void;
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ onClick }) => {
    return (
        <Card className="flex align-items-center justify-content-center h-full">
            <div className="flex flex-column align-items-center">
                <Button
                    icon="pi pi-plus"
                    className="p-button-rounded p-button-lg p-button-text"
                    onClick={onClick}
                    aria-label="Add new card"
                />
            </div>
        </Card>
    );
};

export default AddCardButton;