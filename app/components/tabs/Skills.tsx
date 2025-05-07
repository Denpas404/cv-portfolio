import { programmingLanguages, frameworks, toolsAndTech } from "./data/skillsData";

export default function Skills() {
    return (
        <section>
            <h2 className="text-xl font-semibold text-[#3b82f6] border-b border-[#3b82f6] pb-2">Teknologier & Kompetencer</h2>

            <h3 className="font-semibold text-[#3b82f6] mt-6">Programmeringssprog</h3>
            <div className="bg-gray-50 my-4 px-4 py-2 rounded-md border border-gray-200">
                <ul className="mt-1 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                    {programmingLanguages.map((lang, idx) => (
                        <li key={idx}>{lang}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-base font-semibold text-[#3b82f6]">Frameworks</h3>
                <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-md p-3 list-disc list-inside">
                    {frameworks.map((fw, idx) => (
                        <li key={idx}>{fw}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-base font-semibold text-[#3b82f6]">Teknologi & Software</h3>
                <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-md p-3 list-disc list-inside">
                    {toolsAndTech.map((tool, idx) => (
                        <li key={idx}>{tool}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}