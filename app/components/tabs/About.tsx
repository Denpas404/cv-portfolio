import { aboutMe, skills } from "./data/aboutData";



export default function About() {


    return (
        <section>
            {/* Om mig */}
            <h2 className="text-2xl font-bold text-[var(--about)] border-b border-[var(--about)] pb-2">Om mig</h2>

            <div className="space-y-6 mt-4">
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4 space-y-4">
                    <h3 className="text-xl font-semibold text-[var(--about)] mb-2">Baggrund & Motivation</h3>
                    {aboutMe.map((item, index) => (
                        <p
                            key={index}
                            className="text-gray-700"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        ></p>
                    ))}

                </div>

                {/* Hvad har jeg arbejdet med gennem uddannelsen? */}
                <div>
                    <h3 className="text-xl font-semibold text-[var(--about)] mb-2">Hvad har jeg arbejdet med gennem uddannelsen?</h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow duration-300 bg-gray-50"
                            >
                                <div className="text-4xl bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    {skill.icon}
                                </div>
                                <h4 className="font-semibold text-lg text-gray-800">{skill.title}</h4>
                                <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
