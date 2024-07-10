import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Badge } from 'primereact/badge';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { MenuItem } from 'primereact/menuitem';

export default function TopBar() {
    const { user } = useUser();
    const toast = useRef<Toast>(null);
    const menuRight = useRef<Menu>(null);
    const itemRenderer = (item: any) => (
        <div className="p-menuitem-content">
            <a className="flex align-items-center p-menuitem-link" href={item.href}>
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && (
                    <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
                        {item.shortcut}
                    </span>
                )}
            </a>
        </div>
    );
    let items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer,
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer,
                },
            ],
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer,
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer,
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    template: itemRenderer,
                    href: '/api/auth/logout',
                },
            ],
        },
        {
            separator: true,
        },
        {
            command: () => {
                toast?.current?.show({
                    severity: 'info',
                    summary: 'Info',
                    detail: 'Item Selected',
                    life: 3000,
                });
            },
            template: (item: any, options: any) => {
                return (
                    <button
                        onClick={(e) => options.onClick(e)}
                        className={classNames(
                            options.className,
                            'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround'
                        )}
                    >
                        <Avatar image={user?.picture || ''} className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <span className="font-bold">{user?.name}</span>
                            <span className="text-sm">{user?.nickname || 'user'}</span>
                        </div>
                    </button>
                );
            },
        },
    ];

    return (
        <div className="w-full flex justify-content-between">
            <Toast ref={toast} />
            <div className="text-500 text-m font-bold ml-4 align-self-center">Current Page</div>
            <div className="flex justify-content-center gap-4">
                <div className="align-self-center">
                    <Button
                        className="h-2rem w-2rem"
                        icon="pi pi-cog"
                        rounded
                        text
                        severity="secondary"
                        aria-label="Bookmark"
                    />
                </div>
                <div className="align-self-center">
                    <Avatar
                        image={user?.picture || ''}
                        shape="circle"
                        onClick={(event) => {
                            menuRight?.current?.toggle(event);
                        }}
                    />
                    <Menu
                        model={items}
                        popup
                        className="w-full md:w-15rem mt-2"
                        ref={menuRight}
                        id="popup_menu_right"
                        popupAlignment="right"
                    />
                </div>
            </div>
        </div>
    );
}
