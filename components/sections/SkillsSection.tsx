'use client';
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
import SkillBadge from "../global/SkillBadge";
import SectionHeader from "../global/SectionHeader";

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

    return (
        <section className="text-center bg-white dark:bg-[#0f172a] pb-12">
            <SectionHeader title="Skills" />
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-4xl mx-auto">
                {skills?.map((skill, idx) => (
                    <SkillBadge
                        key={skill?.label}
                        label={skill?.label}
                        icon={skill?.icon}
                        bgColor={bgVariables[idx % bgVariables?.length]}
                    />
                ))}
            </div>
        </section>
    );
}