interface SidebarProps {
    setActiveTab: (tab: string) => void;
}

export default function Sidebar({ setActiveTab }: SidebarProps) {
    return (
        <aside className="w-full bg-gray-200 p-6 rounded-l-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-5 w-[12ch] h-[12ch]" viewBox="0 0 24 24">
  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"></path>
</svg>
<h1 className="text-xl font-bold text-green-600 text-center">Dennis Paaske</h1>
            <p className="text-gray-700 mt-2">Datatekniker elev med speciale i programmering</p>

            <div className="mt-6">
                <h2 className="text-lg font-semibold border-b border-green-500 pb-2">Kontakt</h2>
                <p>🔗 <a href="https://github.com/Denpas404" className="text-green-600 hover:underline">github.com/Denpas404</a></p>
                <p>🌐 denpas404.github.io</p>
            </div>
        </aside>
    );
}
