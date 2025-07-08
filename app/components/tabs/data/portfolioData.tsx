export const projects = [
    {
        title: "MealPlanner",
        shortDescription: "MealPlanner er en brugervenlig webapp til planlægning af ugens måltider og automatisk indkøbsliste.",
        longDescription: `MealPlanner er en brugervenlig webapp, der gør det nemt at planlægge ugens måltider og skabe overblik i hverdagen. Brugeren kan logge ind, oprette og redigere opskrifter, og med en intuitiv drag-and-drop funktion lægge opskrifter ind i en ugentlig madplan fordelt på morgenmad, frokost og aftensmad. Baseret på madplanen genereres automatisk en indkøbsliste, så du aldrig glemmer noget i supermarkedet.

Praktikforløb 3 projekt:
- Udvikling af 'Mealplanner'-projekt fra idé til færdigt system
- Projekt indeholdt brugeroprettelse, opskriftsstyring, ugeplanlægning og automatisk indkøbsliste
- Teknologier: Angular frontend, ASP.NET Core API og MSSQL database
- Arbejdet inkluderede projektidé, OOAD-analyse, SWOT, samt Gantt-planlægning
- Projektet blev udført som gruppearbejde med fokus på samarbejde og fælles ansvar`,
        image: "/images/portfolio/mealplanner.png",
        technologies: [
            { name: "Angular", type: "Framework" },
            { name: "ASP.NET Core", type: "Framework" },
            { name: "C#", type: "Language" },
            { name: "MSSQL", type: "Database" },
            { name: "Entity Framework", type: "Library" }
        ]
    },
    {
        title: "TEC-ArduinoRFID-PI-PLC",
        shortDescription: "IoT-løsning med Arduino og RFID til identifikation på transportbånd, integreret med Raspberry Pi og PLC.",
        longDescription: `Projektet "TEC-ArduinoRFID-PI-PLC" er en praktisk anvendelse af IoT og automation i et simuleret produktionsmiljø, udviklet i samarbejde med automatikafdelingen. Målet er at kunne identificere og spore vogne (slæder) på et transportbånd i realtid.

Hver vogn er udstyret med et unikt RFID-kort, og der er placeret stationære RFID-læsere langs båndet, forbundet til Arduino-enheder. Når en vogn passerer en læser, aflæses kortet, og data sendes trådløst via ESP8266 WiFi-modul til en Raspberry Pi, som herefter videresender informationen til en PLC (Programmerbar Logik Controller). PLC’en er ansvarlig for styringen af transportbåndets logik og handlinger.

Systemet er udviklet med skalerbarhed i tankerne. Automatikafdelingen har efterspurgt tre skannerstationer, men der er allerede indkøbt komponenter til fire stationer, så systemet nemt kan udvides.

Hver skannerstation består af:
-1 x Arduino
-1 x RFID RC522 reader/writer
-1 x ESP8266 Serial WiFi modul
-1 x Breadboard
-1 x Strømforsyning
-1 x Ethernet modul (alternativ til WiFi)

Funktionelle fordele:
-Automatisk identifikation af vogne
-Trådløs kommunikation mellem enheder
-Realtidsovervågning og rapportering
-Integration med industriel PLC-styring
-Mulighed for udvidelse med flere stationer

Projektet illustrerer, hvordan man med lavpris hardware og netværkskommunikation kan opbygge et skalerbart og professionelt sporingssystem til undervisning eller let industriel brug.`,
        image: "/images/portfolio/p2Projekt.png",
        technologies: [
            { name: "C++", type: "Language" },
            { name: "Python", type: "Language" },
            { name: "Arduino", type: "Hardware" },
            { name: "RFID", type: "Hardware" },
            { name: "ESP8266", type: "Hardware" },
            { name: "Raspberry Pi", type: "Hardware" },
            { name: "PLC", type: "Tool" }
        ]
    },
    {
        title: "CV-portfolio",
        shortDescription: "Et CV-portfolio, der viser mine færdigheder og erfaringer. Det er bygget med React og Tailwind CSS.",
        longDescription: `Dette CV-portfolio er et personligt projekt, udviklet for at præsentere mine kompetencer, erfaringer og tidligere projekter på en overskuelig og professionel måde.

Applikationen er bygget med React og Tailwind CSS og tilbyder en moderne, responsiv og minimalistisk brugergrænseflade. Siden er opdelt i klare sektioner såsom:

- Uddannelse
- Erhvervserfaring
- Frivilligt arbejde
- Teknologier og værktøjer
- Om mig
- Portfolio med detaljerede projekter

Projektet giver mulighed for nem vedligeholdelse og udvidelse, og fungerer som en dynamisk og præsentabel erstatning for det traditionelle CV.`,
        image: "/images/portfolio/cvPortfolio.png",
        technologies: [
            { name: "Next.js", type: "Framework" },
            { name: "TypeScript", type: "Language" },
            { name: "Tailwind CSS", type: "Library" },
            { name: "Framer Motion", type: "Library" },

        ]
    },
    {
        title: "H3-projekt - Projektmanager",
        shortDescription: "Et fullstack projekt udviklet i Angular og ASP.NET Core med MS SQL Server og Entity Framework. Udviklet som et 6-ugers skoleprojekt på H3-niveau.",
        longDescription: `“ProjektManagerFrontend og -Backend” er et 6-ugers skoleprojekt udviklet på H3-niveau med fokus på at opbygge en professionel fullstack-løsning. Frontenden er udviklet i Angular, mens backenden er bygget med ASP.NET Core Web API og koblet op mod en MS SQL Server-database via Entity Framework.

Projektets backend håndterer forretningslogik, datavalidering og RESTful endpoints, mens frontenden giver brugeren en interaktiv og responsiv grænseflade. Databasen indeholder mellem 6 og 14 normaliserede tabeller, og applikationen er testet med unit tests for at sikre stabilitet og kvalitet i koden.

-Projektet demonstrerer:

-Adskillelse af ansvar mellem frontend og backend
-Brugen af moderne webteknologier i samspil
-Integration af en database via ORM (Entity Framework)
-God softwarepraksis gennem enhedstest`,
        image: "/images/portfolio/projectManager.png",
        technologies: [
            { name: "Angular", type: "Framework" },
            { name: "ASP.NET Core", type: "Framework" },
            { name: "Entity Framework", type: "Library" },
            { name: "C#", type: "Language" },
            { name: "MSSQL", type: "Database" },
            { name: "Unit Testing", type: "Tool" }
        ]
    },
    {
        title: "MilkySip - H4-projekt",
        shortDescription: "MilkySip er en Android-app til nybagte forældre, som giver mulighed for at logge tidspunkt og mængde af babyens amning eller flaskemælk. Udviklet i Java med Android Studio som H4 skoleprojekt.",
        longDescription: `MilkySip er en mobilapp målrettet nybagte forældre, som ønsker overblik over deres babys mælkeforbrug. Med appen kan man nemt registrere både tidspunkt og mængde af modermælk eller modermælkserstatning – noget mange forældre er usikre på i den første tid.

Appen er udviklet i Java med Android Studio og blev startet som et H4 skoleprojekt i app-udvikling. Brugeren kan logge hver “sippe” og se en oversigt over dagens, ugens eller hele periodens mælkeforbrug. Målet er at give tryghed i hverdagen og hjælpe forældre med at sikre, at baby får nok næring.

Funktioner:

-Logning af mængde (i ml eller oz)
-Tidsregistrering for hvert måltid
-Enkelt design

Appen kan med tiden udvides med flere funktioner. F.eks. vægtregistrering.`,
        image: "/images/portfolio/milkySip.png",
        technologies: [
            { name: "Android Studio", type: "Tool" },
            { name: "Java", type: "Language" },
            { name: "SQLite", type: "Database" }
        ]
    },
    {
        title: "TEC Energy",
        shortDescription: "TEC Energy er et grønt IoT-projekt, som registrerer strømforbrug, viser det live og gemmer data i en database. Forbruget præsenteres på en hjemmeside som en del af TEC’s klimaindsats. Projektet har været igennem flere iterationer med ESP32, Raspberry Pi og nu et færdigt energimåler-produkt..",
        longDescription: `TEC Energy er et innovativt IoT-projekt med fokus på klima og energiforbrug. Projektets formål er at registrere og visualisere elforbrug i realtid og på længere sigt, og derved bidrage til TEC’s vision om at være en grøn og bæredygtig skole.

Systemet startede som et eksperiment med ESP32 og Raspberry Pi, men er siden blevet opgraderet til at anvende et færdigt energi-målesystem. Den indsamlede data bliver sendt til en database, hvor den lagres og efterfølgende vises på en webside i form af grafer og totalforbrug.

Funktioner:
-Live visning af strømforbrug
-Automatisk datalagring i database
-Brug af professionel energimålerhardware
-Visualisering på hjemmeside via dashboard

-Tidligere versioner med ESP32 og Pi`,
        image: "/images/portfolio/tecEnergy.png",
        technologies: [
            { name: "Angular", type: "Framework" },
            { name: "ASP.NET Core", type: "Framework" },
            { name: "TypeScript", type: "Language" },
            { name: "C#", type: "Language" },
            { name: "C++", type: "Language" },
            { name: "ESP32", type: "Hardware" },
            { name: "Raspberry Pi", type: "Hardware" },
            { name: "InfluxDB", type: "Database" },
            { name: "Grafana", type: "Tool" },
            { name: "IoT", type: "Other" },

        ]
    },
    {
        title: "Mit TEC Forløb",
        shortDescription: "Mit TEC Forløb er en Blazor WebAssembly PWA, hvor elever kan følge deres uddannelsesforløb, se kommende fag og skrive reflektionsnoter efter praktikforløb. Systemet anvender Entity Framework, MSSQL, ASP.NET Core API og Identity til sikker brugerhåndtering.",
        longDescription: `Mit TEC Forløb er en digital platform, der giver elever overblik over deres uddannelsesrejse på TEC. Gennem en moderne og brugervenlig Blazor WebAssembly Progressive Web App (PWA) kan eleverne se deres tidligere og kommende forløb, få indsigt i de fag de skal gennemføre, og skrive refleksionsnoter efter hvert praktikforløb.

Platformen er bygget med en moderne fullstack-teknologi:

-Frontend: Blazor WebAssembly PWA
-Backend: ASP.NET Core API
-Data: MSSQL med Entity Framework
-Brugerhåndtering: ASP.NET Core Identity

Funktioner:
-Visning af hovedforløb, praktikforløb og planlagte fag
-Mulighed for at tilføje reflektionsnoter
-Log ind og brugeradministration via Identity
-Database drevet struktur med mulighed for videre udbygning
-PWA support – kan installeres som app

Projektet er målrettet elever og undervisere på TEC og bidrager til digitalisering og struktur i skoleforløb.`,
        image: "/images/portfolio/mitTecForloeb.png",
        technologies: [
            { name: "C#", type: "Language" },
            { name: "Blazor WebAssembly", type: "Framework" },
            { name: "ASP.NET Core", type: "Framework" },
            { name: "MSSQL", type: "Database" },
            { name: "Entity Framework", type: "Library" },
            { name: "PWA", type: "Tool" },
            { name: "Identity", type: "Tool" }
        ]

    }
];
