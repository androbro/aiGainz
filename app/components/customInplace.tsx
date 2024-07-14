import React, { useEffect, useRef } from 'react';
import { Button } from 'primereact/button';

interface CustomInplaceProps {
    display: React.ReactNode;
    content: React.ReactNode;
    isEditing: boolean;
    onEdit: (editing: boolean) => void;
    escapeUsingEscKey?: boolean;
}

const CustomInplace: React.FC<CustomInplaceProps> = ({
    display,
    content,
    isEditing,
    onEdit,
    escapeUsingEscKey = true,
}) => {
    const inplaceRef = useRef<HTMLDivElement>(null);

    const toggleEdit = () => onEdit(!isEditing);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (escapeUsingEscKey && event.key === 'Escape') {
                onEdit(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [escapeUsingEscKey, onEdit]);

    return (
        <div ref={inplaceRef}>
            {!isEditing ? (
                <div onClick={toggleEdit} className="hover:surface-100 border-round cursor-pointer">
                    {display}
                </div>
            ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>{content}</div>
                    <Button
                        icon="pi pi-times"
                        className="h-2rem w-2rem ml-1"
                        rounded
                        text
                        severity="danger"
                        aria-label="Cancel"
                        onClick={() => onEdit(false)}
                    />
                </div>
            )}
        </div>
    );
};

export default CustomInplace;
