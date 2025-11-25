
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import FloatingButtons from '../../components/feature/FloatingButtons';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ProgramsSection from './components/ProgramsSection';
import ImpactSection from './components/ImpactSection';
import TestimonialsSection from './components/TestimonialsSection';
import DonateSection from './components/DonateSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-cream dark:bg-darkmode-bg text-midnight dark:text-cream">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="site-max">
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <ImpactSection />
        <TestimonialsSection />
        <DonateSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
