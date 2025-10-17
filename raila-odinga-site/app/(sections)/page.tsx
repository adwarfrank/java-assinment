import NavBar from "@/app/(components)/NavBar";
import HeroSection from "@/app/(components)/HeroSection";
import VisionSection from "@/app/(components)/VisionSection";
import Timeline from "@/app/(components)/Timeline";
import MediaGallery from "@/app/(components)/MediaGallery";
import NewsFeed from "@/app/(components)/NewsFeed";
import ProjectsSection from "@/app/(components)/ProjectsSection";
import ContactForm from "@/app/(components)/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--color-ink)]">
      <NavBar />
      <main>
        <HeroSection />
        <section id="about" className="container-responsive py-20" aria-label="About Raila Odinga">
          <div className="prose max-w-3xl">
            <h2 className="section-title">About</h2>
            <p>
              Born 7 Jan 1945, Raila Amolo Odinga is the son of Kenya’s first Vice President, Jaramogi Oginga Odinga. Educated in East Germany, a successful industrialist with East African Spectre, and a leading champion for multiparty democracy, he served as Kenya’s Prime Minister (2008–2013) and later as the African Union High Representative for Infrastructure Development.
            </p>
            <a className="btn-secondary" href="#" download>
              Download Biography
            </a>
          </div>
        </section>
        <section id="timeline" className="py-20 bg-[color:var(--color-brand-white)]">
          <div className="container-responsive">
            <h2 className="section-title mb-6">Timeline</h2>
            <Timeline />
          </div>
        </section>
        <section id="vision" className="py-20 bg-[color:var(--color-brand-blue)]/5">
          <div className="container-responsive">
            <h2 className="section-title mb-6">Vision</h2>
            <VisionSection />
          </div>
        </section>
        <section id="media" className="py-20">
          <div className="container-responsive">
            <h2 className="section-title mb-6">Media</h2>
            <MediaGallery />
          </div>
        </section>
        <section id="news" className="py-20 bg-[color:var(--color-brand-blue)]/5">
          <div className="container-responsive">
            <h2 className="section-title mb-6">News</h2>
            <NewsFeed />
          </div>
        </section>
        <section id="projects" className="py-20">
          <div className="container-responsive">
            <h2 className="section-title mb-6">Projects</h2>
            <ProjectsSection />
          </div>
        </section>
        <section id="contact" className="py-20 bg-[color:var(--color-brand-blue)]/5">
          <div className="container-responsive">
            <h2 className="section-title mb-6">Contact</h2>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
