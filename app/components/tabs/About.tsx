export default function About() {
    const skills = [
        {
            title: "Webudvikling",
            description: "Udvikling af moderne og responsive websites i React, Next.js, Blazor og Angular.",
            icon: "💻"
        },
        {
            title: "Softwareudvikling",
            description: "Applikationsudvikling i Java, C#, JavaScript, TypeScript og Python – til både desktop- og server-side løsninger.",
            icon: "🧠"
        },
        {
            title: "Databaser",
            description: "Opsætning, administration og forespørgsler i relationelle databaser med SQL – samt udvikling med Entity Framework.",
            icon: "🗄️"
        },
        {
            title: "IoT & Embedded",
            description: "Udvikling med ESP32, sensorer og datakommunikation via MQTT.",
            icon: "📡"
        }
    ];

    return (
        <section className="space-y-12">
            {/* Om mig */}
            <div>
                <h2 className="text-2xl font-bold border-b-2 border-green-500 pb-2">Om mig</h2>
                <p className="text-gray-800 mt-4">
                    Jeg er i gang med at uddanne mig som datatekniker med speciale i programmering og har allerede opnået solid erfaring med softwareudvikling, databaser og IT-infrastruktur gennem både skoleforløb og praktik.
                </p>
                <p className="text-gray-800 mt-4">
                    Jeg har en stor passion for programmering og teknologisk problemløsning. Jeg nyder at dykke ned i komplekse udfordringer og omsætte dem til brugbare, effektive løsninger gennem kode.
                </p>
                <p className="text-gray-800 mt-4">
                    Under min uddannelse har jeg arbejdet med udvikling af apps, websystemer og databaser. Det har givet mig en praktisk og alsidig forståelse for it-systemer i praksis.
                </p>
                <p className="text-gray-800 mt-4">
                    Jeg brænder for at skabe løsninger, der er både funktionelle og brugervenlige – og jeg er altid nysgerrig på nye teknologier, værktøjer og metoder. Uanset om jeg arbejder med frontend, backend eller IoT-projekter, motiveres jeg af at lære og bygge løsninger, der skaber reel værdi.
                </p>
            </div>

            {/* Hvad jeg kan arbejde med */}
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Hvad jeg kan arbejde med</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow duration-300 bg-white"
                        >
                            <div className="text-4xl text-blue-600 mb-4">{skill.icon}</div>
                            <h4 className="font-semibold text-lg text-gray-800">{skill.title}</h4>
                            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
