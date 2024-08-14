'use client';
interface SideBarProps {}

export default function Aside({}: SideBarProps) {
    return (
        <aside className="flex flex-column gap-2">
            <div
                className="flex flex-column w-full surface-0 border-round-3xl"
                style={{ height: '50px' }}
            ></div>
            <div
                className="flex flex-column w-full surface-0 border-round-3xl"
                style={{ height: '100px' }}
            ></div>
            <div
                className="flex flex-column w-full surface-0 border-round-3xl"
                style={{ height: '150px' }}
            ></div>
            <div
                className="flex flex-column w-full surface-0 border-round-3xl"
                style={{ height: '200px' }}
            ></div>
        </aside>
    );
}