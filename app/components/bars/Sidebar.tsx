import { useState, useEffect, useRef } from "react";
import ContactModal from "../modals/ContactModal";
import { sidebarData } from "../tabs/data/sidebarData"; // tilpas path


interface SidebarProps {
    setActiveTab: (tab: string) => void;
    color: string;
}

export default function Sidebar({ color }: SidebarProps) {
    const [contactOpen, setContactOpen] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const infoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
                setShowInfo(false);
            }
        }

        if (showInfo) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showInfo]);


    return (
        <aside className="w-full bg-[var(--sidebar)] p-6 rounded-l-lg text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="mx-auto mb-5 w-[18ch] h-[18ch] rounded-full border-5 opacity-80 shadow-xl"
                style={{ borderColor: color, transition: 'border-color 600ms ease-in-out' }}
            >
                <circle cx="64" cy="64" r="64" fill="transparent" stroke="black" strokeWidth="6" />
                <circle cx="64" cy="48" r="20" fill="black" />
                <path d="M32 104c0-18 64-18 64 0" fill="black" />
            </svg>

            <h1
                className="text-xl font-extrabold text-center"
                style={{ color, transition: 'color 600ms ease-in-out' }}
            >
                {sidebarData.name}
            </h1>

            <div className="flex justify-center items-center gap-2 mt-2 relative" ref={infoRef}>
                <div className="flex flex-col items-center mt-2 relative" ref={infoRef}>
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-700">{sidebarData.title.shortTitle.main}</span>
                        <button
                            onClick={() => setShowInfo(!showInfo)}
                            className="text-gray-500 hover:text-black transition cursor-pointer"
                            aria-label="Mere info"
                        >
                            🛈
                        </button>
                    </div>
                    <span className="text-sm text-gray-500">{sidebarData.title.shortTitle.sub}</span>
                </div>


                {showInfo && (
                    <div className="absolute top-full mt-2 w-72 p-3 rounded-lg bg-white shadow-xl text-sm text-left z-10 border border-gray-300 space-y-2">
                        <div>
                            <strong>Officiel titel:</strong><br />
                            {sidebarData.title.full}
                        </div>

                        <div>{sidebarData.title.description}</div>

                        <div className="space-y-1">
                            <p className="font-semibold">Læs mere:</p>
                            <ul className="list-disc list-outside pl-5 space-y-1 text-blue-600">
                                {sidebarData.educationLinks.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

            </div>


            <div className="mt-6">
                <h2
                    className="text-lg font-semibold border-b pb-2"
                    style={{ borderColor: color, borderBottomWidth: '2px', transition: 'border-color 600ms ease-in-out' }}
                ></h2>
                <div className="mt-4 grid gap-3 justify-center">
                    <div className="grid grid-cols-[1.5rem_auto] gap-3 items-center">
                        <div className="flex justify-center items-center text-xl">
                            {sidebarData.location.icon}
                        </div>
                        <a
                            href={sidebarData.location.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline text-left pointer-events-auto"
                            style={{ color, transition: 'color 600ms ease-in-out' }}
                        >
                            {sidebarData.location.label}
                        </a>

                    </div>

                    <div className="grid grid-cols-[1.5rem_auto] gap-3 items-center">
                        <div className="flex justify-center items-center">
                            {sidebarData.github.icon}
                        </div>
                        <a href={sidebarData.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline text-left pointer-events-auto" style={{ color, transition: 'color 600ms ease-in-out' }}>
                            {sidebarData.github.label}
                        </a>
                    </div>

                    <div className="grid grid-cols-[1.5rem_auto] gap-3 items-center">
                        <div className="flex justify-center items-center text-xl">{sidebarData.contact.icon}</div>
                        <button
                            onClick={() => setContactOpen(true)}
                            className="font-semibold hover:underline text-left pointer-events-auto cursor-pointer"
                            style={{ color, transition: 'color 600ms ease-in-out' }}
                        >
                            {sidebarData.contact.Label}
                        </button>
                        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
                    </div>
                </div>
            </div>
        </aside>
    );
}
