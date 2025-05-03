interface SidebarProps {
    setActiveTab: (tab: string) => void;
}

export default function Sidebar({ setActiveTab }: SidebarProps) {
    return (
        <aside className="w-full bg-gray-200 p-3 rounded-l-lg">
            <h1 className="text-xl font-bold text-green-600">Dennis Paaske</h1>
            <p className="text-gray-700">Datatekniker elev med speciale i programmering</p>

            <div className="mt-4">
                <h2 className="text-lg font-semibold border-b border-green-500 pb-2">Kontakt</h2>
                <p>🔗 <a href="https://github.com/Denpas404" className="text-green-600 hover:underline">github.com/Denpas404</a></p>
                <p>🌐 denpas404.github.io</p>
            </div>
        </aside>
    );
}
