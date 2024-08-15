// src/components/PortfolioSection.tsx

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaWhatsapp } from 'react-icons/fa';
import { useDarkMode } from '../../../context/DarkModeContext';
import HomeViewModel from '../../../viewmodels/HomeViewModel';
import {
  PortfolioSectionContainer,
  PortfolioGrid,
  PortfolioItem,
  PortfolioImage,
  PortfolioDescription,
  ModalBackground,
  ModalContainer,
  ModalCloseButton,
  ModalImage,
  ContactButton,
  ContainerWhats,
  WhatsAppCTAButton
} from './styleds/PortfolioSectionStyled'; // Atualize o caminho conforme necessário
import { SectionTitle } from '../../../components/Typography';
import colors from '../../../components/colors';

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

  const currentColors = isDarkMode
    ? {
        background: colors.darkBackground,
        backgroundCard: colors.darkCardBackground
      }
    : {
        background: colors.white,
        backgroundCard: colors.white
      };

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