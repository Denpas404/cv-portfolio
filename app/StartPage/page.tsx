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


export default function StartPage() {
    const [activeTab, setActiveTab] = useState("education");
    const tabContainerRef = useRef<HTMLDivElement | null>(null);
    const [tabHeight, setTabHeight] = useState(0);

    // Adjust SVG height dynamically
    useEffect(() => {
        if (tabContainerRef.current) {
            setTabHeight(tabContainerRef.current.clientHeight);
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-300 text-gray-900 ">
            <Navbar setActiveTab={setActiveTab} />

            {/* Main wrapper */}
            <div className="flex flex-col items-center w-full p-1 mt-12 relative">

                {/* New parent div (column, aligned to the right) */}
                <div className="flex flex-col items-end relative max-w-6xl w-full">

                    {/* Tab Container aligned seamlessly (No Gap) */}
                    <div className="flex flex-row items-stretch justify-end">
                        <img
                            src="/nav-edge.svg"
                            alt="Tab Edge"
                            className="w-auto block translate-x-0.5"
                            style={{ height: `${tabHeight + 25}px` }}
                        />

                        <div ref={tabContainerRef} className="bg-white px-8 rounded-tr-4xl flex items-center">
                            <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
                        </div>
                    </div>


                    {/* A4 Sheet Container  */}
                    <div className="relative flex bg-white w-full max-w-7xl min-h-[90vh] shadow-lg rounded-tl-4xl rounded-bl-4xl rounded-br-4xl overflow-hidden">

                        {/* Sidebar inside A4 Sheet */}
                        <aside className="hidden md:flex w-1/4 bg-gray-200 p-6  rounded-tr-4xl rounded-br-4xl">
                            <Sidebar setActiveTab={setActiveTab} />
                        </aside>

                        {/* Content Box inside A4 Sheet */}
                        <div className="relative w-3/4 p-4">
                            <div className="p-4 mt-1">
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
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
