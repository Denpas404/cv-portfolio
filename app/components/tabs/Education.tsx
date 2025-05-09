import { useState } from 'react';
import {
    ongoingSubjects,
    completedForloeb,
    onlineCourses,
    otherCourses
} from './data/educationData';

export default function Education() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [openOngoing, setOpenOngoing] = useState(false);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleOngoing = () => {
        setOpenOngoing(!openOngoing);
    };

    return (
        <section>
            <h2 className="text-2xl font-bold text-[var(--education)] border-b border-[var(--education)] pb-2">Uddannelse & Kurser</h2>

            {/* Igangværende sektion */}
            <h3 className="font-semibold text-[var(--education)] mt-6">Igangværende forløb</h3>
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
            <h3 className="font-semibold text-[var(--education)] mt-6">Gennemførte forløb</h3>
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
            <h3 className="font-semibold text-[var(--education)] mt-6 mb-4">Selvstudier & e-læring</h3>
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
            <h3 className="font-semibold text-[var(--education)] mt-6 mb-4">Øvrige kurser</h3>
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