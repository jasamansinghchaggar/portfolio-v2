import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

const App = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
    </MainLayout>
  )
}

export default App