// src/views/Home/Home.tsx
import React from 'react';
import BannerSection from './Sections/BannerSection';
import ServicesSection from './Sections/ServicesSection';
import AboutSection from './Sections/AboutSection';
import TestimonialsSection from './Sections/TestimonialsSection';
import ContactFormSectionComponent from './Sections/ContactFormSection';
import HomeViewModel from '../../viewmodels/HomeViewModel';
import PortfolioSection from './Sections/PortfolioSection';

const Home: React.FC = () => {
  const homeViewModel = new HomeViewModel();

  return (
    <>
      <BannerSection viewModel={homeViewModel} />
      <ServicesSection viewModel={homeViewModel} />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactFormSectionComponent />
    </>
  );
};

export default Home;