import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
