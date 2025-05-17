
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar scrolled={scrolled} onNavigate={scrollToSection} />
      
      <AnimatePresence>
        <main>
          <section id="home" className="min-h-screen flex items-center">
            <Hero onExplore={() => scrollToSection('about')} />
          </section>
          
          <section id="about" className="py-20">
            <About />
          </section>
          
          <section id="portfolio" className="py-20 bg-muted/20">
            <Portfolio />
          </section>
          
          <section id="services" className="py-20">
            <Services />
          </section>
          
          <section id="contact" className="py-20 bg-muted/20">
            <Contact />
          </section>
        </main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Index;
