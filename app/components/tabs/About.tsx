import { skills } from "./data/aboutData";


export default function About() {


    return (
        <section>
            {/* Om mig */}
            <h2 className="text-2xl font-bold text-[#d97706] border-b border-[#d97706] pb-2">Om mig</h2>

            <div className="space-y-6 mt-4">
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4 space-y-4">
                    <h3 className="text-xl font-semibold text-[#d97706] mb-2">Baggrund & Motivation</h3>
                    <p>
                        Jeg er i gang med at uddanne mig som datatekniker med speciale i programmering og har allerede opnået solid erfaring med softwareudvikling, databaser og IT-infrastruktur gennem både skoleforløb og praktik.
                    </p>
                    <p>
                        Jeg har en stor passion for programmering og teknologisk problemløsning. Jeg nyder at dykke ned i komplekse udfordringer og omsætte dem til brugbare, effektive løsninger gennem kode.
                    </p>
                    <p>
                        Under min uddannelse har jeg arbejdet med udvikling af apps, websystemer og databaser. Det har givet mig en praktisk og alsidig forståelse for it-systemer i praksis.
                    </p>
                    <p>
                        Jeg brænder for at skabe løsninger, der er både funktionelle og brugervenlige – og jeg er altid nysgerrig på nye teknologier, værktøjer og metoder. Uanset om jeg arbejder med frontend, backend eller IoT-projekter, motiveres jeg af at lære og bygge løsninger, der skaber reel værdi.
                    </p>
                </div>

                {/* Hvad har jeg arbejdet med gennem uddannelsen? */}
                <div>
                    <h3 className="text-xl font-semibold text-[#d97706] mb-2">Hvad har jeg arbejdet med gennem uddannelsen?</h3>
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
