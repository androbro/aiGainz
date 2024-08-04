interface SideBarProps {}

export default function Aside({}: SideBarProps) {
    return (
        <aside className="flex flex-column w-full">
            <div className="surface-0 border-round-2xl  " style={{ height: '400px' }}>
                {/* Sidebar content */}
            </div>
        </aside>
    );
}