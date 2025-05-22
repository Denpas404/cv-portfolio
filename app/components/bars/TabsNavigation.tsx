'use client';

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TabsNavigationProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const tabData = [
    { value: "about", label: "Om mig", color: "amber" },
    { value: "education", label: "Uddannelse", color: "cyan" },
    { value: "skills", label: "Teknologier", color: "blue" },
    { value: "experience", label: "Erhvervserfaring", color: "violet" },
    { value: "volunteer", label: "Fritid & Frivilligt", color: "rose" },
    { value: "portfolio", label: "Portfolio", color: "indigo" },
];

// Color hex codes
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

const TabsNavigation: React.FC<TabsNavigationProps> = ({ activeTab, setActiveTab }) => {
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0, color: "#3b82f6" });

    useEffect(() => {
        const activeIndex = tabData.findIndex(tab => tab.value === activeTab);
        const activeTabElement = tabsRef.current[activeIndex];

        if (activeTabElement) {
            const { offsetLeft, offsetWidth } = activeTabElement;
            const activeColor = getColorByTab(tabData[activeIndex].color);

            setUnderlineProps({
                left: offsetLeft,
                width: offsetWidth,
                color: activeColor,
            });
        }
    }, [activeTab]);

    return (
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            <div className="relative">
                <Tabs.List className="flex flex-wrap space-x-2 mt-2 overflow-x-auto text-md relative">
                    {tabData.map((tab, index) => (
                        <Tabs.Trigger
                            key={tab.value}
                            value={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            ref={(el) => { tabsRef.current[index] = el; }}
                            className="relative px-1 py-2 text-gray-500 font-semibold transition-all duration-300 hover:opacity-80 data-[state=active]:opacity-100 cursor-pointer"
                            style={{
                                color: activeTab === tab.value ? getColorByTab(tab.color) : undefined,
                                textShadow: activeTab === tab.value
                                    ? "0 0 2px rgba(0,0,0,0.2)"
                                    : undefined,
                            }}
                            onMouseEnter={(e) => {
                                if (activeTab !== tab.value) {
                                    (e.currentTarget as HTMLElement).style.color = getColorByTab(tab.color);
                                    (e.currentTarget as HTMLElement).style.textShadow = "0 0 4px rgba(0,0,0,0.1)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== tab.value) {
                                    (e.currentTarget as HTMLElement).style.color = "";
                                    (e.currentTarget as HTMLElement).style.textShadow = "";
                                }
                            }}
                        >
                            {tab.label}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>

                {/* Animated shared underline */}
                <motion.div
                    className="absolute bottom-0 h-1 rounded-full"
                    animate={{
                        x: underlineProps.left,
                        width: underlineProps.width,
                        backgroundColor: underlineProps.color,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 30,
                    }}
                />
            </div>
        </Tabs.Root>
    );
};

export default TabsNavigation;
