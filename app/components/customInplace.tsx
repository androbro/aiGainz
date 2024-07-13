import React, { useState, useEffect, useRef } from 'react';

interface CustomInplaceProps {
    display: React.ReactNode;
    content: React.ReactNode;
    className?: string;
    escapeUsingEscKey?: boolean;
    escapeUsingClickOutside?: boolean;
}

const CustomInplace: React.FC<CustomInplaceProps> = ({
    display,
    content,
    className,
    escapeUsingEscKey = false,
    escapeUsingClickOutside = false,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const inplaceRef = useRef<HTMLDivElement>(null);

    const toggleEdit = () => setIsEditing(!isEditing);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inplaceRef.current && !inplaceRef.current.contains(event.target as Node)) {
                setIsEditing(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsEditing(false);
            }
        };

        if (escapeUsingClickOutside) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        if (escapeUsingEscKey) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div ref={inplaceRef} className={className}>
            {!isEditing ? (
                <div onClick={toggleEdit}>{display}</div>
            ) : (
                <div>
                    {content}
                    {/* Optionally, add a button or mechanism to close the editor */}
                    {/* <button onClick={toggleEdit}>Done</button> */}
                </div>
            )}
        </div>
    );
};

export default CustomInplace;
