import React, {useEffect} from 'react';
import styled from 'styled-components';
import colors from '../../../components/colors';
import HomeViewModel from '../../../viewmodels/HomeViewModel';
import { useDarkMode } from '../../../context/DarkModeContext'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const defaultColors = {
  background: colors.darkBlue,
  text: colors.white,
  buttonBackground: colors.darkGray,
  buttonHover: colors.lightGray,
  textHoverButton : colors.mediumGray
};

const darkModeColors = {
  background: colors.black,
  text: colors.lightGray,
  buttonBackground: colors.mediumGray,
  buttonHover: colors.darkGray,
  textHoverButton : colors.black
};

const BannerSection = styled.section<{ bgColor: string; textColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  padding: 100px 10px;
`;

const ContentContainer = styled.div`
  text-align: center;
  max-width: 800px;
`;

const HomeTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HomeDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const HomeButton = styled.button<{ buttonBackground: string; buttonHover: string; textHoverButton: string }>`
  font-size: 1.2rem;
  color: ${({ textHoverButton }) => textHoverButton};
  background-color: ${({ buttonBackground }) => buttonBackground};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ buttonHover }) => buttonHover};
    color: ${({ textHoverButton }) => textHoverButton};
  }
`;

const BannerSectionComponent: React.FC<{ viewModel: HomeViewModel }> = ({ viewModel }) => {
  const { isDarkMode } = useDarkMode(); 

  const currentColors = isDarkMode ? darkModeColors : defaultColors;

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <BannerSection bgColor={currentColors.background} textColor={currentColors.text}>
      <ContentContainer>
        <HomeTitle data-aos="fade-up" data-aos-duration="1000">{viewModel.getTitle()}</HomeTitle>
        <HomeDescription  data-aos="fade-up" data-aos-duration="1000">{viewModel.getDescription()}</HomeDescription>
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