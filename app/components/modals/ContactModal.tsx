import { useEffect, useRef, useState } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", honeypot: "" });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`;
            document.body.classList.add("modal-open");

            window.scrollTo({ top: 25, behavior: "smooth" });

            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "";
            document.body.classList.remove("modal-open");
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.honeypot) return; // bot-filter
        console.log("Send data:", formData);
        setSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-start justify-center px-4 pt-0 pb-6"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-6xl h-[90dvh] overflow-y-auto mt-10"
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
            >
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden">
                    {/* Background Map Layer */}
                    <div className="absolute inset-0 z-0 bg-[url('/images/contactModal/contactMap.png')] bg-cover bg-center"></div>

                    {/* Combined Header and Form Layer */}
                    <div className="relative z-10 flex flex-col items-center justify-center min-h-full py-12 px-4">
                        {/* Title Header */}
                        <div className="w-full max-w-2xl text-center py-12 bg-[url('/images/contactModal/contactHeader.png')] bg-cover bg-center rounded-t-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 z-0" />
                            <div className="relative z-10 py-6">
                                <h2 className="text-white text-2xl font-bold drop-shadow">Kontakt mig</h2>
                                <p className="text-white text-sm font-light drop-shadow-sm">Har du spørgsmål? Skriv endelig!</p>
                            </div>
                        </div>

                        {submitted ? (
                            <div className="p-8 bg-white/90 backdrop-blur rounded-b-2xl w-full max-w-2xl text-center">
                                <h3 className="text-xl font-bold text-green-600 mb-4">Tak for din besked!</h3>
                                <p className="text-gray-700">Jeg vender tilbage til dig så hurtigt som muligt.</p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        onClose();
                                    }}
                                    className="mt-6 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                                >
                                    Luk
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 bg-white/90 backdrop-blur rounded-b-2xl w-full max-w-2xl">
                                {/* Honeypot */}
                                <div style={{ display: "none" }}>
                                    <input
                                        type="text"
                                        name="honeypot"
                                        value={formData.honeypot}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex items-center space-x-4">
                                    <label htmlFor="name" className="w-24 text-sm font-medium text-gray-700">Navn:</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Dit navn"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="flex-1 border-b border-gray-400 bg-transparent p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div className="flex items-center space-x-4">
                                    <label htmlFor="email" className="w-24 text-sm font-medium text-gray-700">E-mail:</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="din@email.dk"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="flex-1 border-b border-gray-400 bg-transparent p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div className="flex items-center space-x-4">
                                    <label htmlFor="phone" className="w-24 text-sm font-medium text-gray-700">Telefon:</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="Dit telefonnummer"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="flex-1 border-b border-gray-400 bg-transparent p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div className="flex items-start space-x-4">
                                    <label htmlFor="message" className="w-24 pt-2 text-sm font-medium text-gray-700">Besked:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Din besked..."
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="flex-1 border-b border-gray-400 bg-transparent p-2 h-32 resize-none focus:outline-none focus:border-blue-500"
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full max-w-xl bg-green-600 text-white py-2 rounded-2xl font-semibold hover:bg-green-700 transition"
                                    >
                                        Send besked
                                    </button>
                                </div>
                            </form>
                        )}

                        <button
                            className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                            onClick={onClose}
                            aria-label="Luk"
                        >
                            ×
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
