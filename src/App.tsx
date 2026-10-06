import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Manifesto } from './components/Manifesto';
import { WatchItGrow } from './components/WatchItGrow';
import { PlantCollections } from './components/PlantCollections';
import { ShopCatalogue } from './components/ShopCatalogue';
import { PlantDoctorQuiz } from './components/PlantDoctorQuiz';
import { ServicesSection } from './components/ServicesSection';
import { CareGuideSticky } from './components/CareGuideSticky';
import { BehindTheNursery } from './components/BehindTheNursery';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { FAQAccordion } from './components/FAQAccordion';
import { ContactSection } from './components/ContactSection';
import { BotanicalFooter } from './components/BotanicalFooter';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'daylight'>('dark');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Theme Sync with HTML document attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'daylight' : 'dark'));
  };

  return (
    <div className="app-main">
      {/* Film Grain Texture Overlay */}
      <div className="film-grain" />

      {/* Custom Circular Hover Cursor */}
      <CustomCursor />

      {/* Sprouting Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Website Structure */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <Manifesto />
        <WatchItGrow />
        <PlantCollections />
        <ShopCatalogue />
        <PlantDoctorQuiz />
        <ServicesSection />
        <CareGuideSticky />
        <BehindTheNursery />
        <TestimonialsCarousel />
        <FAQAccordion />
        <ContactSection />
      </main>

      <BotanicalFooter />
    </div>
  );
}
