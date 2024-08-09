import React, { useRef } from 'react';
import styled from 'styled-components';
import colors from '../../../components/colors'; 
import { SectionTitle } from '../../../components/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useDarkMode } from '../../../context/DarkModeContext';
import { FaWhatsapp } from 'react-icons/fa';

const TestimonialsSection = styled.section<{ bgColor: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const TestimonialsContainer = styled.div`
  width: 90%;
  text-align: center;
`;

const TestimonialCard = styled.div<{ bgColor: string; textColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px 10px;
`;

const TestimonialText = styled.p<{ textColor: string }>`
  font-size: 1.1rem;
  color: ${({ textColor }) => textColor};
  font-family: 'Roboto', sans-serif;
`;

const TestimonialAuthor = styled.h4<{ authorColor: string }>`
  color: ${({ authorColor }) => authorColor};
  margin-top: 10px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;

const ContainerWhats = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const WhatsAppCTAButton = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.white};
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  background-color: ${colors.mediumBlue};
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  transition: background-color 0.3s, box-shadow 0.3s;
  width: fit-content;

  &:hover {
    background-color: ${colors.lightBlue};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

const TestimonialsSectionComponent: React.FC = () => {
  const { isDarkMode } = useDarkMode(); 

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
        <SectionTitle>What Our Clients Say</SectionTitle>
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
          <SwiperSlide>
            <TestimonialCard bgColor={currentColors.cardBackground} textColor={currentColors.textColor}>
              <TestimonialText textColor={currentColors.textColor}>
                "The services provided were exceptional! The team was professional and attentive to all our needs. Highly recommend!"
              </TestimonialText>
              <TestimonialAuthor authorColor={currentColors.authorColor}>Jane Doe</TestimonialAuthor>
            </TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard bgColor={currentColors.cardBackground} textColor={currentColors.textColor}>
              <TestimonialText textColor={currentColors.textColor}>
                "A fantastic experience from start to finish. The attention to detail and customer service were top-notch."
              </TestimonialText>
              <TestimonialAuthor authorColor={currentColors.authorColor}>John Smith</TestimonialAuthor>
            </TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard bgColor={currentColors.cardBackground} textColor={currentColors.textColor}>
              <TestimonialText textColor={currentColors.textColor}>
                "Very satisfied with the outcome. The team's expertise and dedication made all the difference."
              </TestimonialText>
              <TestimonialAuthor authorColor={currentColors.authorColor}>Emily Johnson</TestimonialAuthor>
            </TestimonialCard>
          </SwiperSlide>
        </Swiper>
        <ContainerWhats>
          <WhatsAppCTAButton 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Fale Conosco
          </WhatsAppCTAButton>
        </ContainerWhats>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default TestimonialsSectionComponent;