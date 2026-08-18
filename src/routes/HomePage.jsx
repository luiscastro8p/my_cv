import Seo from '@/components/Seo';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Nav from '@/layout/Nav';
import TopBar from '@/layout/TopBar';
import Footer from '@/layout/Footer';
import SkipLink from '@/layout/SkipLink';

export default function HomePage() {
  return (
    <>
      <Seo />
      <SkipLink />
      <TopBar />
      <Nav />
      <main id="contenido">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
