"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // optional but clean
import SkillBadge from "../global/SkillBadge";
import SectionHeader from "../global/SectionHeader";
import {
    FileCode,
    FileJson,
    Braces,
    Globe,
    Server,
    Database,
    GitBranch,
    LayoutDashboard,
    Settings2,
    Network,
    BracesIcon,
    MousePointerClick,
    MoveHorizontal,
    TerminalSquare,
    LayoutTemplate,
    BarChart2,
} from "lucide-react";
import { MagneticButton } from "../ui/magnetic-button";

const iconClass = "w-4 h-4";

const skills = [
    { label: "React.js", icon: <LayoutTemplate className={iconClass} /> },
    { label: "Next.js", icon: <LayoutDashboard className={iconClass} /> },
    { label: "HTML", icon: <FileCode className={iconClass} /> },
    { label: "CSS", icon: <FileCode className={iconClass} /> },
    { label: "Tailwind", icon: <MoveHorizontal className={iconClass} /> },
    { label: "Javascript", icon: <FileJson className={iconClass} /> },
    { label: "TypeScript", icon: <Braces className={iconClass} /> },
    { label: "Node.js", icon: <Server className={iconClass} /> },
    { label: "Express.js", icon: <TerminalSquare className={iconClass} /> },
    { label: "FastAPI", icon: <BracesIcon className={iconClass} /> },
    { label: "MongoDB", icon: <Database className={iconClass} /> },
    { label: "PostgreSQL", icon: <Database className={iconClass} /> },
    { label: "Socket.io", icon: <Network className={iconClass} /> },
    { label: "Rest API", icon: <Globe className={iconClass} /> },
    { label: "Redux", icon: <Settings2 className={iconClass} /> },
    { label: "Responsive Design", icon: <MousePointerClick className={iconClass} /> },
    { label: "Git", icon: <GitBranch className={iconClass} /> },
    { label: "Performance Optimization", icon: <BarChart2 className={iconClass} /> },
];

export function SkillsSection() {
    const bgVariables = [
        'var(--skill1bg)',
        'var(--skill2bg)',
        'var(--skill3bg)',
        'var(--skill4bg)',
        'var(--skill5bg)',
    ];

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.7 });

    return (
        <section
            ref={ref}
            className="text-center bg-white dark:bg-[#0f172a] pb-12"
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <SectionHeader title="Skills" />
            </motion.div>
            <motion.div
                className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-4xl mx-auto"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.05,
                        },
                    },
                }}
            >
                {skills.map((skill, idx) => {
                    return (
                        <motion.div
                            key={skill?.label}
                            style={{
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden",
                            }}
                            variants={{
                                hidden: { rotateY: 90, opacity: 0 },
                                visible: { rotateY: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.2 }}

                        >
                            <MagneticButton>
                                <SkillBadge
                                    label={skill?.label}
                                    icon={skill?.icon}
                                    bgColor={bgVariables[idx % bgVariables.length]}
                                />
                            </MagneticButton>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};