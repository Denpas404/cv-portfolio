import { useState } from 'react';

export default function Education() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [openOngoing, setOpenOngoing] = useState(false);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleOngoing = () => {
        setOpenOngoing(!openOngoing);
    };

    const ongoingSubjects = [
        {
            title: 'Praktikforløb 5 · 18. januar – 1. august 2025',
            subjects: [
                'Arbejdet på projektet: "Mit TEC forløb"',
                'Udvikling af et system til administration og visualisering af data fra TEC-forløb til elever.',
                'Systemet inkluderer også mulighed for, at elever kan skrive refleksionsnoter og sende dem til deres lærer',
                'Projektet omfattede databasedesign, API-udvikling og frontend-visualisering',
                'Teknologier: ASP.NET Core, MSSQL, progressiv webapp (PWA) bygget med Blazor WebAssembly',
                'Projektarbejdet inkluderede idéudvikling, OOAD-analyse, SWOT og Gantt-planlægning'
            ]

        },
    ];

    const completedForloeb = [
        {
            title: "Hovedforløb 4 · 21. oktober – 17. januar 2025",
            subjects: [
                "App programmering I",
                "App programmering II",
                "Game-design I",
                "Game-design II",
                "IoT og Embeddede Linux systemer",
                "IoT og Embeddede systemer",
                "Linux rettet mod server og embedded",
                "Serversideprogrammering",
                "Softwaretest og -sikkerhed"
            ]
        },
        {
            title: "Praktikforløb 4 · 22. juni – 20. oktober 2024",
            subjects: [
                "Arbejdet med projektet: TEC Energy",
                "Udvikling af et system til overvågning og visualisering af energiforbrug i bygninger",
                "Projektet omfattede opsætning af sensorer, datalogning og energidashboards",
                "Teknologier: ESP32, MQTT, Grafana og InfluxDB",
                "Projektarbejdet inkluderede idéudvikling, OOAD-analyse, SWOT og Gantt-planlægning",
                "Projektet bidrog til TECs fokus på grøn udvikling og bæredygtighed som grøn skole"
            ]
        },
        {
            title: "Hovedforløb 3 · 9. april – 20. juni 2024",
            subjects: [
                "Big Data begreber, teknikker og processer",
                "Databaseprogrammering ¹",
                "GUI-programmering ¹",
                "IoT og Embeddede systemer",
                "Objekt Orienteret Analyse og Design ¹",
                "Python Programmering",
                "Serversideprogrammering",
                "Softwaretest og -sikkerhed ¹",
                "Note ¹: Fag markeret med ¹ blev gennemført som ét samlet projekt"
            ]
        },
        {
            title: "Praktikforløb 3 · 24. juni 2023 – 8. april 2024",
            subjects: [
                "Praktikforløb 3 projekt:",
                "Udvikling af 'Mealplanner'-projekt fra idé til færdigt system",
                "Projekt indeholdt brugeroprettelse, opskriftsstyring, ugeplanlægning og automatisk indkøbsliste",
                "Teknologier: Angular frontend, ASP.NET Core API og MSSQL database",
                "Arbejdet inkluderede projektidé, OOAD-analyse, SWOT, samt Gantt-planlægning",
                "Projektet blev udført som gruppearbejde med fokus på samarbejde og fælles ansvar"
            ]
        },
        {
            title: "Hovedforløb 2 · 11. april – 23. juni 2023",
            subjects: [
                "Clientsideprogrammering",
                "Databaseprogrammering ¹",
                "GUI-programmering ¹",
                "Objektorienteret programmering ¹",
                "Serveradministration og sikkerhed",
                "Serverteknologi",
                "Serverteknologi - Databaseserver",
                "Note ¹: Fag markeret med ¹ blev gennemført som ét samlet projekt"
            ]
        },
        {
            title: "Praktikforløb 2 · 14. januar – 10. april 2023",
            subjects: ["Fag F", "Fag G"]
        },
        {
            title: "Hovedforløb 1 · 24. oktober 2022 – 13. januar 2023",
            subjects: [
                "Clientsideprogrammering",
                "Databaseprogrammering",
                "Grundlæggende programmering",
                "Netværk I",
                "Computerteknologi",
                "Objektorienteret programmering",
                "Studieteknik"
            ]
        },
        {
            title: "Praktikforløb 1 · 25. april – 23. oktober 2022",
            subjects: ["Fag 1", "Fag 2"]
        },
    ];

    const onlineCourses = [
        { title: 'Learn Java', provider: 'Codecademy' },
        { title: 'C#', provider: 'Intro TEC' },
        { title: 'Python for Beginners', provider: 'Sololearn' },
        { title: 'Python Core', provider: 'Sololearn' },
        { title: 'SQL 101', provider: 'Sololearn' },
        { title: 'Java', provider: 'Sololearn' },
        { title: 'HTML Fundamentals', provider: 'Sololearn' },
        { title: 'CCNA R&S: Introduction to Networks', provider: 'Cisco Networking Academy' },
    ];

    const otherCourses = [
        { title: 'Førstehjælp – 8 timers kursus', provider: 'TEC' },
        { title: 'Brandbekæmpelse – grundlæggende brandkursus', provider: 'TEC' }
    ];

    return (
        <section>
            <h2 className="text-xl font-semibold text-cyan-600 border-b border-cyan-500 pb-2">Uddannelse & Kurser</h2>

            {/* Igangværende sektion */}
            <h3 className="font-semibold text-cyan-600 mt-6">Igangværende forløb</h3>
            <ul className="ml-5 text-gray-800">
                <li>
                    <p className="font-medium">Datatekniker med speciale i programmering</p>
                    <ul className="ml-6 mt-2 space-y-2">
                        {ongoingSubjects.map((item, idx) => (
                            <li key={idx}>
                                <div className="bg-gray-50 my-4 px-4 py-2 rounded-md border border-gray-200">
                                    <div
                                        onClick={toggleOngoing}
                                        className="flex items-center justify-between w-full text-left font-medium text-gray-800 hover:bg-cyan-50 cursor-pointer"
                                    >
                                        <span>{item.title}</span>
                                        <svg
                                            className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${openOngoing ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ${openOngoing ? 'max-h-[500px] mt-3' : 'max-h-0'}`}>
                                        <ul className="list-disc ml-6 text-sm text-gray-700">
                                            {item.subjects.map((subject, subIdx) => (
                                                <li key={subIdx}>{subject}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>

            {/* Gennemførte sektion */}
            <h3 className="font-semibold text-cyan-600 mt-6">Gennemførte forløb</h3>
            <ul className="ml-5 text-gray-800">
                <li>
                    <p className="font-medium">Datatekniker med speciale i programmering</p>
                    <ul className="ml-6 mt-2 space-y-2">
                        {completedForloeb.map((item, index) => (
                            <li key={index}>
                                <div className="bg-gray-50 my-4 px-4 py-2 rounded-md border border-gray-200">
                                    <div
                                        onClick={() => toggle(index)}
                                        className="flex items-center justify-between w-full text-left font-medium text-gray-800 hover:bg-cyan-50 cursor-pointer"
                                    >
                                        <span>{item.title}</span>
                                        <svg
                                            className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] mt-3' : 'max-h-0'}`}>
                                        <ul className="list-disc ml-6 text-sm text-gray-700">
                                            {item.subjects.map((subject, subIdx) => (
                                                <li key={subIdx}>{subject}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>

            {/* Selvstudier & e-læring */}
            <h3 className="font-semibold text-cyan-600 mt-6 mb-4">Selvstudier & e-læring</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {onlineCourses.map((course, index) => (
                    <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-cyan-50 hover:shadow-md transition"
                    >
                        <p className="text-sm font-semibold text-gray-800">{course.title}</p>
                        <p className="text-xs text-gray-600">{course.provider}</p>
                    </div>
                ))}
            </div>

            {/* Øvrige kurser */}
            <h3 className="font-semibold text-cyan-600 mt-6 mb-4">Øvrige kurser</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherCourses.map((course, index) => (
                    <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-cyan-50 hover:shadow-md transition"
                    >
                        <p className="text-sm font-semibold text-gray-800">{course.title}</p>
                        <p className="text-xs text-gray-600">{course.provider}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
