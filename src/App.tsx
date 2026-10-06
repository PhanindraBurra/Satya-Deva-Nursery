import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PlantCategoriesSection } from './components/PlantCategoriesSection';
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
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <HeroSection />
        <PlantCategoriesSection />
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
