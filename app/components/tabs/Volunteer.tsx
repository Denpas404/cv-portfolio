import { volunteerData } from "./data/volunteerData";

export default function Volunteer() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-[var(--volunteer)] border-b border-[var(--volunteer)] pb-2">
                Fritid & Frivilligt Arbejde
            </h2>

            <div className="space-y-6 mt-4">
                {volunteerData.map((item, index) => (
                    <div
                        key={index}
                        className={`border border-gray-200 rounded-md p-4 ${item.bgColor ?? "bg-gray-50"}`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">{item.icon}</span>
                            <h3 className="font-semibold text-[var(--volunteer)]">
                                {item.title}
                            </h3>
                        </div>

                        {item.paragraphs.map((para, i) => (
                            <p key={i} className="text-sm text-gray-700 mb-2">
                                {para}
                            </p>
                        ))}

                        {item.bullets && (
                            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                                {item.bullets.map((li, i) => (
                                    <li key={i}>{li}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
