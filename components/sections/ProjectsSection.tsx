'use client';

import { motion } from 'framer-motion';
import { projectsData } from "@/constants/projectsData";
import SectionHeader from "../global/SectionHeader";
import { ProjectCard } from '../cards/ProjectCard';

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
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export const ProjectsSection = () => {
    return (
        <section className="w-full py-16 px-4 md:px-8 bg-white dark:bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <SectionHeader title="My Projects" link="/work" linkText="Explore more" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projectsData?.map((project, index) => (
                        <motion.div key={project.id} variants={cardVariants}>
                            <ProjectCard
                                title={project.title}
                                images={project.images}
                                tags={project.tags}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};













// import { projectsData } from "@/constants/projectsData";
// import { ProjectCard } from "../cards/ProjectCard";
// import SectionHeader from "../global/SectionHeader";

// export const ProjectsSection = () => {
//     return (
//         <section className="w-full py-16 px-4 md:px-8 bg-white dark:bg-[#0f172a]">
//             <div className="max-w-7xl mx-auto px-4">
//                 <SectionHeader title="My Projects" link="/work" linkText="Explore more" />

//                 {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {projectsData?.map((project, index) => (
//                         <ProjectCard
//                             key={project.id}
//                             title={project.title}
//                             images={project.images}
//                             tags={project.tags}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };