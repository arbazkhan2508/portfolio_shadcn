'use client';
import {
    Code2,
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
    { label: "React.js", color: "purple", icon: <LayoutTemplate className={iconClass} /> },
    { label: "Next.js", color: "blue", icon: <LayoutDashboard className={iconClass} /> },
    { label: "HTML", color: "green", icon: <FileCode className={iconClass} /> },
    { label: "CSS", color: "blue", icon: <FileCode className={iconClass} /> },
    { label: "Tailwind", color: "purple", icon: <MoveHorizontal className={iconClass} /> },
    { label: "Javascript", color: "blue", icon: <FileJson className={iconClass} /> },
    { label: "TypeScript", color: "green", icon: <Braces className={iconClass} /> },
    { label: "Node.js", color: "blue", icon: <Server className={iconClass} /> },
    { label: "Express.js", color: "purple", icon: <TerminalSquare className={iconClass} /> },
    { label: "FastAPI", color: "blue", icon: <BracesIcon className={iconClass} /> },
    { label: "MongoDB", color: "green", icon: <Database className={iconClass} /> },
    { label: "PostgreSQL", color: "blue", icon: <Database className={iconClass} /> },
    { label: "Socket.io", color: "purple", icon: <Network className={iconClass} /> },
    { label: "Rest API", color: "blue", icon: <Globe className={iconClass} /> },
    { label: "Redux", color: "green", icon: <Settings2 className={iconClass} /> },
    { label: "Responsive Design", color: "blue", icon: <MousePointerClick className={iconClass} /> },
    { label: "Git", color: "purple", icon: <GitBranch className={iconClass} /> },
    { label: "Performance Optimization", color: "blue", icon: <BarChart2 className={iconClass} /> },
];

export function SkillsSection() {
    return (
        <section className="text-center mt-12">
            <SectionHeader title="Skills" />
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-4xl mx-auto">
                {skills?.map((skill) => (
                    <SkillBadge
                        key={skill.label}
                        label={skill.label}
                        color={skill.color as any}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </section>
    );
}