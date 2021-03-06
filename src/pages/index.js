import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import EmailBox from "../components/EmailBox";
import LandingSection from "../components/LandingSection";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import SocialMediaBox from "../components/SocialMediaBox";

export default function Home() {
  return (
    <>
      <SocialMediaBox />
      <EmailBox />
      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
