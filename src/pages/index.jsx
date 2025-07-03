
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Preloader from '../Components/Preloader';
import Navigation from '../Components/Navigation';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Project from '../Components/Project';
import Contact from '../Components/Contact';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll during loading
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = 'unset';
    
    // Refresh ScrollTrigger after content loads
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  useEffect(() => {
    if (!isLoading) {
      // Initialize smooth scroll behavior
      gsap.registerPlugin(ScrollTrigger);
      
      // Add parallax effect to floating orbs
      const orbs = document.querySelectorAll('.floating-orb');
      orbs.forEach((orb) => {
        gsap.to(orb, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: orb,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Preloader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
