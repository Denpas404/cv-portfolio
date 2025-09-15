import { experienceData } from "./data/ExperienceData";

export default function Experience() {
    const boxColors = ["bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-purple-50"];

    return (
        <section>
            <h2 className="text-2xl font-bold text-[var(--experience)] border-b border-[var(--experience)] pb-2">
                Erhvervserfaring
            </h2>

            <div className="relative mt-6 ml-2 border-l-2 border-[var(--experience)] space-y-10">
                {experienceData.map((item, index) => (
                    <div
                        key={index}
                        className={`relative pl-6 before:absolute before:left-[-9px] before:top-2 before:w-4 before:h-4 before:bg-[var(--experience)] before:rounded-full`}
                    >
                        <div className={`shadow-md rounded-md p-5 transition-all duration-300 ${boxColors[index % boxColors.length]}`}>
                            <h3 className="text-lg font-bold text-[var(--experience)]">{item.title}</h3>
                            <div className="mt-2 space-y-2 text-sm text-gray-700 leading-relaxed">
                                {item.paragraphs.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
