import { useState } from "react";
import ContactModal from "../modals/ContactModal";

interface SidebarProps {
    setActiveTab: (tab: string) => void;
    color: string;
}

export default function Sidebar({ color }: SidebarProps) {
    const [contactOpen, setContactOpen] = useState(false);

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
                Dennis Paaske
            </h1>
            <p className="font-medium text-gray-700 mt-2">Datatekniker elev med speciale i programmering</p>

            <div className="mt-6">
                <h2
                    className="text-lg font-semibold border-b pb-2"
                    style={{ borderColor: color, borderBottomWidth: '2px', transition: 'border-color 600ms ease-in-out' }}
                ></h2>
                <div className="mt-4 grid gap-3 justify-center">
                    <div className="grid grid-cols-[1.5rem_auto] gap-3 items-center">
                        <div className="flex justify-center items-center text-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-black"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                            </svg>
                        </div>
                        <a
                            href="https://denpas404.github.io/"
                            className="font-semibold hover:underline text-left pointer-events-auto"
                            style={{ color, transition: 'color 600ms ease-in-out' }}
                        >
                            København S
                        </a>
                    </div>

                    <div className="grid grid-cols-[1.5rem_auto] gap-3 items-center">
                        <div className="flex justify-center items-center">
                            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.582v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.306.762-1.606-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.235-3.22-.124-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.004 2.047.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.192.698.8.58C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
                            </svg>
                        </div>
                        <a href="https://github.com/Denpas404" className="font-semibold hover:underline text-left pointer-events-auto" style={{ color, transition: 'color 600ms ease-in-out' }}>
                            github.com/Denpas404
                        </a>
                    </div>

                    <div className="grid grid-cols-[1.5rem_auto] gap-3 items-center">
                        <div className="flex justify-center items-center text-xl">🌐</div>
                        <button
                            onClick={() => setContactOpen(true)}
                            className="font-semibold hover:underline text-left pointer-events-auto"
                            style={{ color, transition: 'color 600ms ease-in-out' }}
                        >
                            Kontakt mig
                        </button>
                        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
                    </div>
                </div>
            </div>
        </aside>
    );
}
