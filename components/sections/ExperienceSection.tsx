import React from 'react';
import { ExperienceCard } from '../cards/ExperienceCard';
import { experienceData } from '@/constants/experienceData';
import SectionHeader from '../global/SectionHeader';

const ExperienceSection = () => {
    return (
        <section className="w-full py-16 px-4 md:px-8 bg-white">
            <SectionHeader title="Experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto">
                {/* <div className="flex flex-wrap justify-center gap-8"> */}
                {experienceData?.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;