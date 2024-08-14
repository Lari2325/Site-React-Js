import React from 'react';
import BannerSectionComponent from './Sections/BannerSection';
import ContactFormSectionComponent from '../Home/Sections/ContactFormSection';

const Contact: React.FC = () => {

  return (
    <>
      <BannerSectionComponent />
      <ContactFormSectionComponent />
    </>
  );
};

export default Contact;