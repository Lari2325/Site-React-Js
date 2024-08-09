// src/components/PortfolioSection.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../../components/colors';
import { SectionTitle } from '../../../components/Typography';
import { FaWhatsapp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDarkMode } from '../../../context/DarkModeContext';
import HomeViewModel from '../../../viewmodels/HomeViewModel';

const defaultColors = {
    background: colors.white,
    backgroundCard : colors.white
};
  
const darkModeColors = {
    background: colors.darkBackground,
    backgroundCard : colors.darkCardBackground
};

const PortfolioSectionContainer = styled.section<{ bgColor: string }>`
  width: 100%;
  padding: 100px 0;
  background: ${({ bgColor }) => bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 90%;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const PortfolioItem = styled.div<{ bgCard: string }>`
  background-color: ${({ bgCard }) => bgCard};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  max-width: 280px;

  &:hover {
    transform: scale(1.05);
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const PortfolioDescription = styled.p`
  padding: 15px;
  font-size: 1rem;
  color: ${colors.darkGray};
`;

const ModalBackground = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.3s ease;
  overflow: auto;
`;

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.8); /* Transparent background */
  border-radius: 10px;
  width: 80%;
  max-width: 430px;
  padding: 20px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: .5px;
  right: .5px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.white};
  cursor: pointer;
  z-index: 2;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 75vh;
    max-width: 400px;
  border-radius: 10px;
  margin-bottom: 15px;
  object-fit: cover;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: ${colors.darkBlue};
  color: ${colors.white};
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${colors.lightBlue};
  }
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

const PortfolioSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Initialize HomeViewModel
  const homeViewModel = new HomeViewModel();
  const portfolioItems = homeViewModel.getPortfolioItems();
  const portfolioTitle = homeViewModel.getPortfolioTitle();
  const buttonText = homeViewModel.getButtonText();

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const { isDarkMode } = useDarkMode();

  const currentColors = isDarkMode ? darkModeColors : defaultColors;

  return (
    <PortfolioSectionContainer bgColor={currentColors.background}>
      <SectionTitle>{portfolioTitle}</SectionTitle>
      <PortfolioGrid>
        {portfolioItems.map(item => (
          <PortfolioItem key={item.id} bgCard={currentColors.backgroundCard} onClick={() => handleItemClick(item)}>
            <PortfolioImage src={item.imageUrl} alt={`Portfolio item ${item.id}`} />
            <PortfolioDescription>{item.title}</PortfolioDescription>
          </PortfolioItem>
        ))}
      </PortfolioGrid>

      {/* Modal */}
      {selectedItem && (
        <ModalBackground isVisible={!!selectedItem}>
          <ModalContainer>
            <ModalCloseButton onClick={handleCloseModal}>&times;</ModalCloseButton>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop
            >
              {portfolioItems.map(item => (
                <SwiperSlide key={item.id}>
                  <ModalImage src={item.imageUrl} alt={`Portfolio item ${item.id}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Botão de contato */}
            <ContactButton
              href={`https://wa.me/1234567890?text=Olá,%20eu%20estou%20interessado%20no%20seu%20projeto%20"${selectedItem.title}".`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText}
            </ContactButton>
          </ModalContainer>
        </ModalBackground>
      )}

      <ContainerWhats>
        <WhatsAppCTAButton 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          {buttonText}
        </WhatsAppCTAButton>
      </ContainerWhats>
    </PortfolioSectionContainer>
  );
};

export default PortfolioSection;