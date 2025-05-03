export default function Skills() {
    return (
        <section>
            <h2 className="text-xl font-semibold text-[#3b82f6] border-b border-[#3b82f6] pb-2">Teknologier & Kompetencer</h2>
            
                    <h3 className="font-semibold text-[#3b82f6] mt-6">Programmeringssprog</h3>
            <div className="bg-gray-50 my-4 px-4 py-2 rounded-md border border-gray-200">                
                <ul className="mt-1 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                    <li>C++ (Arduino, PlatformIO)</li>
                    <li>MicroPython</li>
                    <li>C (ESP-IDF)</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>SQL - MSSQL - PostgreSQL</li>
                </ul>
            </div>


            <div className="mb-4">
                <h3 className="text-base font-semibold text-[#3b82f6]">Frameworks</h3>
                <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-md p-3 list-disc list-inside">
                    <li>Blazor</li>
                    <li>Angular</li>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>ASP.NET Core</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>

            <div>
                <h3 className="text-base font-semibold text-[#3b82f6]">Teknologi & Software</h3>
                <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-md p-3 list-disc list-inside">
                    <li>Visual Studio</li>
                    <li>Visual Studio Code</li>
                    <li>PyCharm</li>
                    <li>Windows 7, 10, Server 2012</li>
                    <li>Linux</li>
                    <li>TeamViewer, Remote Desktop</li>
                    <li>Office 365</li>
                    <li>Raspberry Pi</li>
                    <li>MMC (Microsoft Management Console)</li>
                </ul>
            </div>
        </section>
    );
}
