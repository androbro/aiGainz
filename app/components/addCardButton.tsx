import React from 'react';
import { Button } from 'primereact/button';

interface AddCardButtonProps {
    onClick: () => void;
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ onClick }) => {
    return (
        <div className="flex flex-column align-items-center justify-content-center h-full">
            <Button
                icon="pi pi-plus"
                className="p-button-rounded p-button-lg p-button-text"
                onClick={onClick}
                aria-label="Add new card"
            />
        </div>
    );
};

export default AddCardButton;