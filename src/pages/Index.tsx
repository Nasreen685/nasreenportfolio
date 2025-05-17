
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
    <div className="bg-background text-foreground">
      <Navbar scrolled={scrolled} onNavigate={scrollToSection} />
      
      <AnimatePresence>
        <main>
          <section id="home" className="min-h-screen">
            <Hero onExplore={() => scrollToSection('about')} />
          </section>
          
          <section id="about" className="py-20 bg-background/95 relative">
            <div className="absolute inset-0 z-0 opacity-5">
              <img 
                src="https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80" 
                alt="" 
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
            <About />
          </section>
          
          <section id="portfolio" className="py-20 bg-muted/20 relative">
            <div className="absolute inset-0 z-0 opacity-5">
              <img 
                src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80" 
                alt="" 
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
            <Portfolio />
          </section>
          
          <section id="services" className="py-20 bg-background/95 relative">
            <div className="absolute inset-0 z-0 opacity-5">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80" 
                alt="" 
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
            <Services />
          </section>
          
          <section id="contact" className="py-20 bg-muted/20 relative">
            <div className="absolute inset-0 z-0 opacity-5">
              <img 
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80" 
                alt="" 
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
            <Contact />
          </section>
        </main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Index;
