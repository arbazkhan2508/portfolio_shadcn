// components/SkillBadge.tsx
import { FC, ReactNode } from "react";

interface SkillBadgeProps {
    label: string;
    icon: ReactNode;
    bgColor: string;
}

const SkillBadge: FC<SkillBadgeProps> = ({ label, icon, bgColor }) => {
    return (
        <div
            // className={`
            //     flex items-center gap-2 px-6 py-2 rounded-md shadow-md 
            //     text-sm font-medium transition duration-300 ease-in-out
            //     hover:scale-105 hover:shadow-xl
            //     dark:hover:shadow-slate-700/40
            // `}
            className={`flex items-center gap-2 px-6 py-2 rounded-md shadow-md text-sm font-medium`}
            style={{ backgroundColor: bgColor }}
        >
            {icon}
            {label}
        </div>
    );
};

export default SkillBadge;