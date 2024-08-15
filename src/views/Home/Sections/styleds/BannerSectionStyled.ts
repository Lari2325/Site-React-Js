import styled from 'styled-components';
import colors from '../../../../components/colors';

export const defaultColors = {
  background: colors.darkBlue,
  text: colors.white,
  buttonBackground: colors.darkGray,
  buttonHover: colors.lightGray,
  textHoverButton: colors.mediumGray,
};

export const darkModeColors = {
  background: colors.black,
  text: colors.lightGray,
  buttonBackground: colors.mediumGray,
  buttonHover: colors.darkGray,
  textHoverButton: colors.black,
};

export const BannerSection = styled.section<{ bgColor: string; textColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  padding: 100px 10px;
`;

export const ContentContainer = styled.div`
  text-align: center;
  max-width: 800px;
`;

export const HomeTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const HomeDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

export const HomeButton = styled.button<{ buttonBackground: string; buttonHover: string; textHoverButton: string }>`
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