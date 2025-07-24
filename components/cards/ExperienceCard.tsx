import React from "react";

type ExperienceCardProps = {
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
    bgColor?: string;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    role,
    company,
    duration,
    responsibilities,
    bgColor = 'var(--expCard1bg)',
}) => {
    return (
        <div
            className="p-4 md:p-6 rounded-xl flex flex-col items-center justify-center shadow w-full max-w-md mx-auto space-y-4"
            style={{ backgroundColor: bgColor }}
        >
            <div className="inline-block bg-white text-black text-sm lg:text-base font-medium px-4 py-1 rounded-md shadow-sm mx-auto">
                {role}
            </div>

            <div className="text-center w-full flex flex-col items-center justify-center gap-1">
                <h3 className="text-lg font-semibold">{company}</h3>
                <p className="text-sm text-muted-foreground font-medium">{duration}</p>
            </div>

            <ul className="bg-white p-4 rounded-lg space-y-2 text-sm text-gray-700">
                {responsibilities?.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                        <span className="mt-[6px] h-[6px] w-[6px] bg-gray-500 rounded-full inline-block" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};