interface SideBarProps {}

export default function Aside({}: SideBarProps) {
    return (
        <aside className="flex flex-column w-full border-2">
            <div className="surface-0 border-round-3xl  " style={{ height: '400px' }}>
                {/* Sidebar content */}
            </div>
        </aside>
    );
}