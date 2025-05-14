import { useState, useEffect, useRef } from "react";
import { projects } from "./data/portfolioData";

// Type-definition for et projekt
// Bruges til type-sikkerhed på vores data

type Project = {
    title: string;
    shortDescription: string;
    longDescription: string;
    image: string;
};

export default function Portfolio() {
    // State til at holde hvilket projekt der er valgt (og dermed åbent i modal)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Ref til modal-elementet, så vi kan scrolle til det
    const modalRef = useRef<HTMLDivElement | null>(null);

    // Effekt der styrer scroll + ESC-key og body-lock
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        if (selectedProject) {
            document.body.style.overflow = "hidden";
            document.body.classList.add("modal-open");            

            if (modalRef.current) {
                const rect = modalRef.current.getBoundingClientRect();
                const offset = 10; // Ønsket afstand fra top
                const top = rect.top + window.scrollY - offset;

                window.scrollTo({
                    top,
                    behavior: 'smooth',
                });
            }

            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = "auto";
            document.body.classList.remove("modal-open"); 
        }

        return () => {
            document.body.style.overflow = "auto";
            document.body.classList.remove("modal-open"); 
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject]);

    return (
        <section>
            {/* Sektionstitel */}
            <h2 className="text-2xl font-bold text-[var(--portfolio)] border-b border-[var(--portfolio)] pb-2">Portfolio</h2>

            {/* Liste over projekter */}
            <div className="space-y-6 mt-4">
                <div>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedProject(project)}
                                className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow duration-300 bg-gray-50 cursor-pointer"
                            >
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h4 className="font-semibold text-lg text-gray-800">{project.title}</h4>
                                <p className="text-gray-600 text-sm mt-2">{project.shortDescription}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modalvisning af valgt projekt */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-start justify-center px-4 pt-[160px] pb-6 sm:items-center sm:pt-0"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        ref={modalRef}
                        className="bg-white w-full max-w-md sm:max-w-2xl rounded-xl shadow-xl overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxHeight: '90vh' }}
                    >
                        {/* Luk-knap */}
                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Luk"
                        >
                            ×
                        </button>

                        {/* Titel */}
                        <div className="px-4 pt-6 pb-2 sm:px-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">{selectedProject.title}</h3>
                        </div>

                        {/* Billede */}
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-48 sm:h-64 object-cover"
                        />

                        {/* Lang beskrivelse */}
                        <div className="p-4 sm:p-6 overflow-y-auto max-h-[45vh] text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line scroll-smooth scrollbar-hide hover:scrollbar-default">
                            {selectedProject.longDescription}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
