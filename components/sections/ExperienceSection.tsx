import React from 'react';
import { ExperienceCard } from '../cards/ExperienceCard';
import { experienceData } from '@/constants/experienceData';
import SectionHeader from '../global/SectionHeader';

const ExperienceSection = () => {
    const bgVariables = [
        'var(--expCard1bg)',
        'var(--expCard2bg)',
        'var(--expCard3bg)',
    ];

    return (
        <section className="w-full py-16 px-4 md:px-8 bg-white dark:bg-[#0f172a]">
            <SectionHeader title="Experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto">
                {experienceData?.slice(0, 3)?.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        bgColor={bgVariables[index % bgVariables?.length]}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;