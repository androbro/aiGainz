import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext';
import { useUser } from '@auth0/nextjs-auth0/client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function TopBar() {
    const { user } = useUser();
    const menuRight = useRef<Menu>(null);
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState('');

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

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Nutrients', href: '/nutrients' },
        { name: 'Body Metrics', href: '/bodyMetrics' },
        { name: 'Settings', href: '/settings' },
    ];

    useEffect(() => {
        const currentLink = navLinks.find((link) => link.href === pathname);
        setActiveLink(currentLink ? currentLink.name : '');
    }, [pathname]);

    return (
        <div
            className="w-full flex flex-column justify-content-start align-items-center p-3 border-round-bottom-2xl"
            style={{
                backgroundColor: '#1a1a1a',
                height: '350px',
            }}
        >
            <div className="w-full flex justify-content-between align-items-center">
                <div className="flex align-items-center">
                    <span className="text-xl font-bold text-white mr-4">aiGainz</span>
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
            <div className="flex align-self-start ml-4 mt-4">
                <ul className="flex list-none p-0 m-0">
                    {navLinks.map((link) => (
                        <li key={link.name} className="mr-3">
                            <Link
                                href={link.href}
                                className={`no-underline transition-colors duration-200 ${
                                    activeLink === link.name
                                        ? 'text-cyan-500 uppercase'
                                        : 'text-gray-400 hover:text-cyan-900'
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}