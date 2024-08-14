import React from 'react';
import Banner from './Sections/BannerSection';
import AboutSectionComponent from '../Home/Sections/AboutSection';
import ContactFormSectionComponent from '../Home/Sections/ContactFormSection';
import TestimonialsSectionComponent from '../Home/Sections/TestimonialsSection';
import MissaoVisaoValoresSection from './Sections/MissaoVisaoValoresSection';
import DifferencesSection from './Sections/DifferencesSection';

const About: React.FC = () => {

  return (
    <>
      <Banner />
      <AboutSectionComponent />
      <MissaoVisaoValoresSection />
      <TestimonialsSectionComponent />
      <DifferencesSection />
      <ContactFormSectionComponent />
    </>
  );
};

export default About;