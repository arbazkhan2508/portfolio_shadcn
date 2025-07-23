// components/SkillBadge.tsx
import { FC, ReactNode } from "react";

interface SkillBadgeProps {
    label: string;
    color: "purple" | "blue" | "green";
    icon: ReactNode;
}

const colorMap = {
    purple: "bg-[#e3d8fc]",
    blue: "bg-[#d7ebfd]",
    green: "bg-[#e4f1dc]",
};

const SkillBadge: FC<SkillBadgeProps> = ({ label, color, icon }) => {
    return (
        <div
            className={`flex items-center gap-2 px-6 py-2 rounded-md shadow-md text-sm font-medium ${colorMap[color]}`}
        >
            {icon}
            {label}
        </div>
    );
};

export default SkillBadge;