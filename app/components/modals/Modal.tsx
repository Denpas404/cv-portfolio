import { useEffect, useRef } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export default function Modal({ isOpen, onClose, children, className = "" }: ModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`;
            document.body.classList.add("modal-open");

            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "";
            document.body.classList.remove("modal-open");
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center px-4 pb-6"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className={`bg-white w-full max-w-md sm:max-w-2xl rounded-xl shadow-xl overflow-hidden relative mt-[15px] ${className}`}
                onClick={(e) => e.stopPropagation()}
                style={{ maxHeight: "90vh" }}
            >
                <button
                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                    onClick={onClose}
                    aria-label="Luk"
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}