import React from 'react';
import HomeViewModel from '../../../viewmodels/HomeViewModel';
import { SectionTitle } from '../../../components/Typography';
import { useDarkMode } from '../../../context/DarkModeContext';
import {
  ServicesSection,
  ServicesContainer,
  CardsContainer,
  ServiceCard,
  CardImage,
  CardTitle,
  ContainerButton,
  CardButton
} from './styleds/ServicesSectionStyled'; // Atualize o caminho conforme necessário
import colors from '../../../components/colors';

const ServicesSectionComponent: React.FC<{ viewModel: HomeViewModel }> = ({ viewModel }) => {
  const { isDarkMode } = useDarkMode();

  const currentColors = isDarkMode
    ? {
        background: colors.darkBackground,
        cardBackground: colors.darkCardBackground,
        cardText: colors.darkTextColor,
        buttonBackground: colors.mediumGray,
        buttonHover: colors.darkGray,
        buttonTextHover: colors.lightGray
      }
    : {
        background: colors.white,
        cardBackground: colors.white,
        cardText: colors.darkBlue,
        buttonBackground: colors.darkBlue,
        buttonHover: colors.darkCardBackground,
        buttonTextHover: colors.white
      };

  return (
    <ServicesSection bgColor={currentColors.background}>
      <ServicesContainer>
        <SectionTitle>{viewModel.getServicesTitle()}</SectionTitle>
        <CardsContainer>
          {viewModel.getServices().map((service, index) => (
            <ServiceCard key={index} bgColor={currentColors.cardBackground} textColor={currentColors.cardText}>
              <CardImage src={service.imageUrl} alt={service.title} />
              <CardTitle>{service.title}</CardTitle>
              <ContainerButton>
                <CardButton
                  buttonBackground={currentColors.buttonBackground}
                  buttonHover={currentColors.buttonHover}
                  buttonTextHover={currentColors.buttonTextHover}
                >
                  {service.buttonText}
                </CardButton>
              </ContainerButton>
            </ServiceCard>
          ))}
        </CardsContainer>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default ServicesSectionComponent;