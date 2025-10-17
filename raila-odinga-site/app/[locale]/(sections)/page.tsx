import HeroSection from "@/app/(components)/HeroSection";
import AboutSection from "@/app/(components)/AboutSection";
import Timeline from "@/app/(components)/Timeline";
import VisionSection from "@/app/(components)/VisionSection";
import MediaGallery from "@/app/(components)/MediaGallery";
import NewsFeed from "@/app/(components)/NewsFeed";
import ProjectsSection from "@/app/(components)/ProjectsSection";
import ContactForm from "@/app/(components)/ContactForm";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Timeline />
      <VisionSection />
      <MediaGallery />
      <NewsFeed />
      <ProjectsSection />
      <ContactForm />
      <footer className="py-10 text-center text-sm text-textDark/60">© {new Date().getFullYear()} Raila Amolo Odinga</footer>
    </div>
  );
}
