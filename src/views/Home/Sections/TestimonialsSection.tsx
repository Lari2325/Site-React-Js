import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { FaWhatsapp } from 'react-icons/fa';
import { useDarkMode } from '../../../context/DarkModeContext';
import { SectionTitle } from '../../../components/Typography';
import { TestimonialsViewModel } from '../../../viewmodels/HomeViewModel'; 

import {
  TestimonialsSection,
  TestimonialsContainer,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  ContainerWhats,
  WhatsAppCTAButton
} from './styleds/TestimonialsSectionStyled'; 
import colors from '../../../components/colors';

const TestimonialsSectionComponent: React.FC = () => {
  const { isDarkMode } = useDarkMode(); 

  const testimonialsViewModel = new TestimonialsViewModel();
  const testimonials = testimonialsViewModel.getTestimonials();
  const button = testimonialsViewModel.getButton();

  const currentColors = isDarkMode ? {
    background: colors.darkBackground,
    cardBackground: colors.darkCardBackground,
    textColor: colors.darkTextColor,
    authorColor: colors.darkAuthorColor,
  } : {
    background: colors.white,
    cardBackground: colors.white,
    textColor: colors.darkGray,
    authorColor: colors.darkBlue,
  };

  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <TestimonialsSection bgColor={currentColors.background}>
      <TestimonialsContainer>
        <SectionTitle>{testimonialsViewModel.getTitle()}</SectionTitle>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard bgColor={currentColors.cardBackground} textColor={currentColors.textColor}>
                <TestimonialText textColor={currentColors.textColor}>
                  {testimonial.description}
                </TestimonialText>
                <TestimonialAuthor authorColor={currentColors.authorColor}>
                  {testimonial.name}
                </TestimonialAuthor>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <ContainerWhats>
          <WhatsAppCTAButton 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            {button}
          </WhatsAppCTAButton>
        </ContainerWhats>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default TestimonialsSectionComponent;