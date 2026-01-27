import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import ServicesSection from '@/components/sections/ServicesSection';
import Preloader from '@/components/Preloader';

const App = () => {
  return (
    <>
      <Preloader />
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </MainLayout>
    </>
  )
}

export default App