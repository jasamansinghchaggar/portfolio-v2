import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Preloader from '@/components/Preloader';

const App = () => {
  return (
    <>
      <Preloader />
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </MainLayout>
    </>
  )
}

export default App