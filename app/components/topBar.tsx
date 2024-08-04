import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function TopBar() {
    const { user } = useUser();
    const menuRight = useRef<Menu>(null);

    const items = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
                window.location.href = '/api/auth/logout';
            },
        },
    ];

    return (
        <div
            className="w-full flex flex-column justify-content-start align-items-center p-3"
            style={{
                backgroundColor: '#1a1a1a',
                height: '350px',
            }}
        >
            <div className="w-full flex justify-content-between align-items-center">
                <div className="flex align-items-center">
                    <span className="text-xl font-bold text-white mr-4">aiGainz</span>
                    <ul className="flex list-none p-0 m-0">
                        <li className="mr-3">
                            <a href="#" className="text-white no-underline">
                                ACTIVITY
                            </a>
                        </li>
                        <li className="mr-3">
                            <a href="#" className="text-gray-400 no-underline">
                                Interactive
                            </a>
                        </li>
                        <li className="mr-3">
                            <a href="#" className="text-gray-400 no-underline">
                                Trackers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 no-underline">
                                Explore
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex align-items-center">
                    <span className="p-input-icon-left mr-3">
                        <i className="pi pi-search" />
                        <InputText
                            placeholder="Search keywords"
                            className="p-inputtext-sm"
                            style={{ backgroundColor: '#333', color: 'white', border: 'none' }}
                        />
                    </span>
                    <Button
                        icon="pi pi-bell"
                        className="p-button-rounded p-button-text p-button-plain"
                        style={{ color: 'white' }}
                    />
                    <Button
                        icon="pi pi-envelope"
                        className="p-button-rounded p-button-text p-button-plain mr-3"
                        style={{ color: 'white' }}
                    />
                    <Avatar
                        image={user?.picture || ''}
                        shape="circle"
                        onClick={(event) => menuRight.current?.toggle(event)}
                        className="cursor-pointer"
                    />
                    <Menu model={items} popup ref={menuRight} />
                </div>
            </div>
        </div>
    );
}