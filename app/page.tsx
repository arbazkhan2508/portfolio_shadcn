// app/page.tsx
import { CometCardDemo } from "@/components/cards/CometCardDemo";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { FindMeSection } from "@/components/sections/FindMeSection";
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
      {/* <CometCardDemo /> */}
      <AboutSection />
      <FindMeSection />
    </main>
  );
}