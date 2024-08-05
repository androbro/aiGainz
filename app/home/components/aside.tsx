'use client';
interface SideBarProps {}

export default function Aside({}: SideBarProps) {
    return (
        <aside
            className="flex flex-column w-full surface-0 border-round-3xl"
            style={{ height: '400px' }}
        ></aside>
    );
}