'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ExperienceCard } from '../cards/ExperienceCard';
import { experienceData } from '@/constants/experienceData';
import SectionHeader from '../global/SectionHeader';
import { CometCard } from '../ui/comet-card';
import { useRef } from 'react';

const ExperienceSection = () => {
    const bgVariables = [
        'var(--expCard1bg)',
        'var(--expCard2bg)',
        'var(--expCard3bg)',
    ];

    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section
            ref={sectionRef}
            className="w-full py-16 px-4 md:px-8 bg-white dark:bg-[#0f172a]"
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <SectionHeader title="Experience" />
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
            >
                {experienceData?.slice(0, 3)?.map((item, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <CometCard>
                            <ExperienceCard
                                bgColor={bgVariables[index % bgVariables.length]}
                                {...item}
                            />
                        </CometCard>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ExperienceSection;


















// import React from 'react';
// import { ExperienceCard } from '../cards/ExperienceCard';
// import { experienceData } from '@/constants/experienceData';
// import SectionHeader from '../global/SectionHeader';
// import { CometCard } from '../ui/comet-card';

// const ExperienceSection = () => {
//     const bgVariables = [
//         'var(--expCard1bg)',
//         'var(--expCard2bg)',
//         'var(--expCard3bg)',
//     ];

//     return (
//         <section className="w-full py-16 px-4 md:px-8 bg-white dark:bg-[#0f172a]">
//             <SectionHeader title="Experience" />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto">
//                 {experienceData?.slice(0, 3)?.map((item, index) => (
//                     <CometCard
//                         key={index}
//                     >
//                         <ExperienceCard
//                             key={index}
//                             bgColor={bgVariables[index % bgVariables?.length]}
//                             {...item}
//                         />
//                     </CometCard>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default ExperienceSection;