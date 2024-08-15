import React, { useEffect } from 'react';
import HomeViewModel from '../../../viewmodels/HomeViewModel';
import { useDarkMode } from '../../../context/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  BannerSection, 
  ContentContainer, 
  HomeTitle, 
  HomeDescription, 
  HomeButton, 
  defaultColors, 
  darkModeColors 
} from './styleds/BannerSectionStyled';

const BannerSectionComponent: React.FC<{ viewModel: HomeViewModel }> = ({ viewModel }) => {
  const { isDarkMode } = useDarkMode();

  const currentColors = isDarkMode ? darkModeColors : defaultColors;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BannerSection bgColor={currentColors.background} textColor={currentColors.text}>
      <ContentContainer>
        <HomeTitle data-aos="fade-up" data-aos-duration="1000">{viewModel.getTitle()}</HomeTitle>
        <HomeDescription data-aos="fade-up" data-aos-duration="1000">{viewModel.getDescription()}</HomeDescription>
        <HomeButton
          buttonBackground={currentColors.buttonBackground}
          buttonHover={currentColors.buttonHover}
          textHoverButton={currentColors.textHoverButton}
        >
          {viewModel.getButtonText()}
        </HomeButton>
      </ContentContainer>
    </BannerSection>
  );
};

export default BannerSectionComponent;