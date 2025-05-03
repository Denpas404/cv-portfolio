'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    setActiveTab: (tab: string) => void;
}

export default function Navbar({ setActiveTab }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="md:hidden bg-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold text-green-600">Dennis Paaske</h1>

                {/* Toggle button */}
                <button onClick={() => setIsOpen(!isOpen)} className="text-green-600">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="bg-white shadow-md">
                    <ul className="flex flex-col p-4 space-y-2">
                        <li><button onClick={() => { setActiveTab("education"); setIsOpen(false); }} className="text-green-600">Uddannelse</button></li>
                        <li><button onClick={() => { setActiveTab("skills"); setIsOpen(false); }} className="text-green-600">Teknologier</button></li>
                        <li><button onClick={() => { setActiveTab("experience"); setIsOpen(false); }} className="text-green-600">Erhvervserfaring</button></li>
                        <li><button onClick={() => { setActiveTab("volunteer"); setIsOpen(false); }} className="text-green-600">Fritid & Frivilligt</button></li>
                        <li><button onClick={() => { setActiveTab("about"); setIsOpen(false); }} className="text-green-600">Om mig</button></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
