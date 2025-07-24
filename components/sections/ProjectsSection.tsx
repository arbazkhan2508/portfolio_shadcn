import { projectsData } from "@/constants/projectsData";
import { ProjectCard } from "../cards/ProjectCard";
import SectionHeader from "../global/SectionHeader";

export const ProjectsSection = () => {
    return (
        <section className="w-full py-16 px-4 md:px-8 bg-white dark:bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader title="My Projects" link="/work" linkText="Explore more" />

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsData?.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};