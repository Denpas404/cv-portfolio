import { programmingLanguages, frameworks, toolsAndTech } from "./data/skillsData";

export default function Skills() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-[#3b82f6] border-b border-[#3b82f6] pb-2">Teknologier & Kompetencer</h2>

            <div className="space-y-6 mt-4">
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <h3 className="font-semibold text-[#3b82f6] mb-2">Programmeringssprog</h3>
                    <ul className="mt-1 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                        {programmingLanguages.map((lang, idx) => (
                            <li key={idx}>{lang}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <h3 className="font-semibold text-[#3b82f6] mb-2">Frameworks</h3>
                    <ul className="mt-1 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                        {frameworks.map((fw, idx) => (
                            <li key={idx}>{fw}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <h3 className="font-semibold text-[#3b82f6] mb-2">Teknologi & Software</h3>
                    <ul className="mt-1 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                        {toolsAndTech.map((tool, idx) => (
                            <li key={idx}>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}