import AboutSection from "./components/AboutSection";
import AIWorkflowSection from "./components/AIWorkflowSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AIWorkflowSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
