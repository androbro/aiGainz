import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';

interface CustomInplaceProps {
    display: React.ReactNode;
    content: React.ReactNode;
    escapeUsingEscKey?: boolean;
}

const CustomInplace: React.FC<CustomInplaceProps> = ({ display, content }) => {
    const [isEditing, setIsEditing] = useState(false);
    const inplaceRef = useRef<HTMLDivElement>(null);

    const toggleEdit = () => setIsEditing(!isEditing);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsEditing(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

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
                        className="h-2rem w-2rem"
                        rounded
                        text
                        severity="danger"
                        aria-label="Cancel"
                        onClick={toggleEdit}
                    />
                </div>
            )}
        </div>
    );
};

export default CustomInplace;
