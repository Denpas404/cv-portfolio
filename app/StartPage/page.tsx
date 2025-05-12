'use client';
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "../components/bars/Sidebar";
import Navbar from "../components/bars/Navbar";
import TabsNavigation from "../components/bars/TabsNavigation";
import Skills from "../components/tabs/Skills";
import Education from "../components/tabs/Education";
import Experience from "../components/tabs/Experience";
import Volunteer from "../components/tabs/Volunteer";
import About from "../components/tabs/About";
import Portfolio from "../components/tabs/Portfolio";

const tabData = [
    { value: "education", color: "cyan" },
    { value: "skills", color: "blue" },
    { value: "experience", color: "violet" },
    { value: "volunteer", color: "rose" },
    { value: "about", color: "amber" },
    { value: "portfolio", color: "indigo" },
];

const getColorByTab = (color: string) => {
    switch (color) {
        case "cyan": return "var(--education)";
        case "blue": return "var(--skills)";
        case "violet": return "var(--experience)";
        case "rose": return "var(--volunteer)";
        case "amber": return "var(--about)";
        case "indigo": return "var(--portfolio)";
        default: return "var(--skills)";;
    }
};

export default function StartPage() {
    const [activeTab, setActiveTab] = useState("education");
    const tabContainerRef = useRef<HTMLDivElement | null>(null);
    const [tabHeight, setTabHeight] = useState(0);

    const activeTabColor = getColorByTab(
        tabData.find((tab) => tab.value === activeTab)?.color || "blue"
    );

    useEffect(() => {
        if (tabContainerRef.current) {
            setTabHeight(tabContainerRef.current.clientHeight);
        }
    }, []);

    return (
        <div className="flex flex-col  text-gray-900 ">
            <Navbar setActiveTab={setActiveTab} />

            {/* Main wrapper */}
            <div className="flex flex-col items-center w-full p-1 mt-6 mb-3 relative drop-shadow-2xl  ">

                {/* Right-aligned column container */}
                <div className="flex flex-col items-end relative max-w-6xl w-full ">

                    {/* Tabs and edge graphic container */}
                    <div className="flex flex-row items-stretch justify-end">
                        {/* Decorative SVG aligned to the left of the tab bar, matching its height */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 136 70"
                            className="w-auto block translate-x-0.5"
                            style={{ height: `${tabHeight + 25}px` }}
                        >
                            <path
                                d="M64 48.3333C40.3125 70 0 70 0 70h135.5V0h-8.673C104.41 0 85.7045 15.5842 74.3306 34.9015 71.281 40.0808 67.8169 44.8421 64 48.3333z"
                                fill="#fff"

                            />
                        </svg>

                        {/* Tab navigation container – height is tracked via ref */}
                        <div ref={tabContainerRef} className="bg-white px-8 rounded-tr-4xl flex items-center">
                            <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
                        </div>
                    </div>


                    {/* A4 Sheet Container  */}
                    <div className="relative flex bg-white w-full max-w-7xl min-h-[90vh] shadow-lg rounded-tl-4xl rounded-bl-4xl rounded-br-4xl overflow-hidden">

                        {/* Sidebar inside A4 Sheet */}
                        <aside className="hidden md:flex w-1/4 bg-[var(--sidebar)] p-6  rounded-tr-4xl rounded-br-4xl">
                            <Sidebar setActiveTab={setActiveTab} color={activeTabColor} />
                        </aside>

                        {/* Content Box inside A4 Sheet */}
                        <div className="relative w-3/4 p-4">
                            <div className="p-4 mt-1 ">
                                <AnimatePresence mode="wait">
                                    {activeTab === "education" && (
                                        <motion.div key="education" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                                            <Education />
                                        </motion.div>
                                    )}

                                    {activeTab === "skills" && (
                                        <motion.div key="skills" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                                            <Skills />
                                        </motion.div>
                                    )}

                                    {activeTab === "experience" && (
                                        <motion.div key="experience" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                                            <Experience />
                                        </motion.div>
                                    )}

                                    {activeTab === "volunteer" && (
                                        <motion.div key="volunteer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                                            <Volunteer />
                                        </motion.div>
                                    )}

                                    {activeTab === "about" && (
                                        <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                                            <About />
                                        </motion.div>
                                    )}

                                    {activeTab === "portfolio" && (
                                        <motion.div key="portfolio" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                                            <Portfolio />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}