import { useState, useEffect, useRef } from "react";
import { projects } from "./data/portfolioData";

type Project = {
    title: string;
    shortDescription: string;
    longDescription: string;
    image: string;
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
            modalRef.current?.scrollIntoView({ behavior: 'smooth' });
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject]);

    return (
        <section>
            <h2 className="text-2xl font-bold text-[var(--portfolio)] border-b border-[var(--portfolio)] pb-2">Portfolio</h2>

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

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center z-50 " onClick={() => setSelectedProject(null)}>
                    <div ref={modalRef} className="bg-white h-[90vh] w-[70vw] mt-15 p-6 rounded-xl shadow-xl relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                            onClick={() => setSelectedProject(null)}
                        >
                            ×
                        </button>
                        <h3 className="text-xl font-bold text-gray-800">{selectedProject.title}</h3>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-[40vh] object-cover mt-4 rounded-xl"
                        />
                        <div className="mt-4 text-gray-600 text-base leading-relaxed whitespace-pre-line overflow-y-auto max-h-[50vh] pr-2 scroll-smooth scrollbar-hide hover:scrollbar-default">
                            {selectedProject.longDescription}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
