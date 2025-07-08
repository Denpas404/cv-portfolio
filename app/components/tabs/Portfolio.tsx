import { useState, useEffect, useRef } from "react";
import { projects } from "./data/portfolioData";

// Type-definition for et projekt
// Bruges til type-sikkerhed på vores data

type Project = {
    title: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    technologies?: { name: string; type: string }[];
};

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

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
                const offset = 10;
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

    const getColor = (type: string) => {
        switch (type) {
            case "Language": return "bg-blue-100 text-blue-800";
            case "Framework": return "bg-green-100 text-green-800";
            case "Database": return "bg-yellow-100 text-yellow-800";
            case "Tool": return "bg-purple-100 text-purple-800";
            case "Hardware": return "bg-pink-100 text-pink-800";
            case "Library": return "bg-rose-100 text-rose-800";
            case "Other": return "bg-gray-100 text-gray-800";
            default: return "bg-gray-200 text-gray-800";
        }
    };

    return (
        <section>
            <h2 className="text-2xl font-bold text-[var(--portfolio)] border-b border-[var(--portfolio)] pb-2">Portfolio</h2>

            <div className="space-y-6 mt-4">
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
                            {project.technologies && (
                                <div className="flex flex-wrap justify-center gap-1 mt-3">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-2 py-1 text-xs shadow-xs rounded-full font-medium ${getColor(tech.type)}`}
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

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
                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Luk"
                        >
                            ×
                        </button>
                        <div className="px-4 pt-6 pb-2 sm:px-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">{selectedProject.title}</h3>
                        </div>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-48 sm:h-64 object-cover"
                        />
                        <div className="p-4 sm:p-6 overflow-y-auto max-h-[45vh] text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line scroll-smooth scrollbar-hide hover:scrollbar-default">
                            {selectedProject.longDescription}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
