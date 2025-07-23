// app/page.tsx
import Footer from "@/components/layouts/Footer";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <div className="w-full h-32"></div>
      <Footer />
    </main>
  );
}