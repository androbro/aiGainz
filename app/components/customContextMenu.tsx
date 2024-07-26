import React, { useRef, useState, ReactNode } from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

interface CustomContextMenuProps {
    onDelete?: () => void;
    onRename?: (newName: string) => void;
    customItems?: MenuItem[];
    children: ReactNode;
}

export const CustomContextMenu: React.FC<CustomContextMenuProps> = ({
    onDelete,
    onRename,
    customItems = [],
    children,
}) => {
    const cm = useRef<ContextMenu>(null);
    const toast = useRef<Toast>(null);
    const [visible, setVisible] = useState(false);

    const items: MenuItem[] = [
        {
            label: 'Rename',
            icon: 'pi pi-pencil',
            command: () => {
                const newName = prompt('Enter new name:');
                if (newName && onRename) {
                    onRename(newName);
                    toast.current?.show({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Renamed successfully',
                        life: 3000,
                    });
                }
            },
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                if (onDelete) {
                    onDelete();
                    toast.current?.show({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Deleted successfully',
                        life: 3000,
                    });
                }
            },
        },
        ...customItems,
    ];

    const show = (event: React.MouseEvent) => {
        event.preventDefault();
        cm.current?.show(event);
        setVisible(true);
    };

    return (
        <>
            <div onContextMenu={show}>{children}</div>
            <ContextMenu model={items} ref={cm} onHide={() => setVisible(false)} />
            <Toast ref={toast} />
        </>
    );
};