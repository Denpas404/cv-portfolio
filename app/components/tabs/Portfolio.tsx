import { useState } from "react";

type Project = {
    title: string;
    shortDescription: string;
    longDescription: string;
    image: string;
};

const test: Project[] = [
    {
        title: "MealPlanner",
        shortDescription: "MealPlanner er en brugervenlig webapp til planlægning af ugens måltider og automatisk indkøbsliste.",
        longDescription: `MealPlanner er en brugervenlig webapp, der gør det nemt at planlægge ugens måltider og skabe overblik i hverdagen. Brugeren kan logge ind, oprette og redigere opskrifter, og med en intuitiv drag-and-drop funktion lægge opskrifter ind i en ugentlig madplan fordelt på morgenmad, frokost og aftensmad. Baseret på madplanen genereres automatisk en indkøbsliste, så du aldrig glemmer noget i supermarkedet.

Praktikforløb 3 projekt:
- Udvikling af 'Mealplanner'-projekt fra idé til færdigt system
- Projekt indeholdt brugeroprettelse, opskriftsstyring, ugeplanlægning og automatisk indkøbsliste
- Teknologier: Angular frontend, ASP.NET Core API og MSSQL database
- Arbejdet inkluderede projektidé, OOAD-analyse, SWOT, samt Gantt-planlægning
- Projektet blev udført som gruppearbejde med fokus på samarbejde og fælles ansvar`,
        image: "/images/portfolio/mealplanner.png"
    },
    {
        title: "Project 2",
        shortDescription: "Et IoT-projekt hvor en slæde med et RFID-kort bevæger sig på et transportbånd. Når kortet passerer en stationær RFID-læser (tilsluttet en Arduino), sendes data trådløst til en Raspberry Pi, som derefter videresender signalet til en PLC, der styrer transportbåndets logik og handlinger.",
        longDescription: `Dette projekt viser en praktisk anvendelse af IoT og automation i et simuleret produktionsmiljø. En slæde, som bevæger sig på et transportbånd, er udstyret med et unikt RFID-kort. Ved siden af transportbåndet er der stationært placeret en Arduino med en RFID-læser.

Når slæden passerer læseren, scannes kortet og data sendes trådløst til en Raspberry Pi. Pi’en fungerer som en kommunikationsgateway, som videresender signalet til en PLC (Programmerbar Logik Controller). PLC’en agerer som systemets “hjerne” og står for den overordnede styring af transportbåndets funktioner.

Denne arkitektur muliggør:
- Automatisk identifikation af slæder
- Realtidsovervågning af bevægelser på båndet
- Trådløs kommunikation mellem forskellige systemkomponenter
- Integration med industriel styring via PLC

Systemet er ideelt som læringsprojekt inden for automation, PLC-programmering og industriel IoT, og illustrerer tydeligt, hvordan man kan forbinde lavniveau hardware med professionel styringsteknologi.`,
        image: "/images/portfolio/p2Projekt.png"        
    },
    {
        title: "CV-portfolio",
        shortDescription: "Et CV-portfolio, der viser mine færdigheder og erfaringer. Det er bygget med React og Tailwind CSS.",
        longDescription: `Dette CV-portfolio er et personligt projekt, udviklet for at præsentere mine kompetencer, erfaringer og tidligere projekter på en overskuelig og professionel måde.

Applikationen er bygget med React og Tailwind CSS og tilbyder en moderne, responsiv og minimalistisk brugergrænseflade. Siden er opdelt i klare sektioner såsom:

- Uddannelse
- Erhvervserfaring
- Frivilligt arbejde
- Teknologier og værktøjer
- Om mig
- Portfolio med detaljerede projekter

Projektet giver mulighed for nem vedligeholdelse og udvidelse, og fungerer som en dynamisk og præsentabel erstatning for det traditionelle CV.`,
        image: "/images/portfolio/cvPortfolio.png"
    },
    
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section>
            <h2 className="text-2xl font-bold text-[var(--about)] border-b border-[var(--about)] pb-2">Portfolio</h2>

            <div className="space-y-6 mt-4">
                <div>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                        {test.map((project, index) => (
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
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center z-50" onClick={() => setSelectedProject(null)}>
                    <div className="bg-white h-[90vh] w-[70vw] mt-5 p-6 rounded-xl shadow-xl relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
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
