import { useState } from "react";
import { blocks } from "./data/skillsData";

export default function Skills() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[var(--skills)] border-b border-[var(--skills)] pb-2 ">
                Min Udviklingsstack
            </h2>

            {blocks.map((block, index) => (
                <div key={index} className=" rounded-2xl shadow border border-gray-100 mt-6 p-4">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center text-left font-semibold text-lg text-[var(--skills)] hover:text-[var(--skills-hover)] focus:outline-none"
                    >
                        <span>{block.title}</span>
                        <svg
                            className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {openIndex === index && (
                        <>
                            {block.description && (
                                <p className="text-sm text-gray-500 mt-2 mb-3">
                                    {block.description}
                                </p>
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {block.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm hover:bg-blue-50 hover:border-blue-300 transition transform hover:scale-[1.015]"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
