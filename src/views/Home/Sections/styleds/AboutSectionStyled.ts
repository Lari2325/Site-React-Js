import styled from 'styled-components';
import colors from '../../../../components/colors';

export const defaultColors = {
  background: colors.white,
  textColor: colors.black,
  chartBorderColor: colors.mediumBlue,
  chartPointColor: colors.mediumBlue,
  chartBackgroundColor: 'rgba(0, 0, 139, 0.2)',
  ctaBackground: colors.mediumBlue,
  ctaText: colors.white,
  ctaHoverBackground: colors.darkBlue,
};

export const darkModeColors = {
  background: colors.black,
  textColor: colors.lightGray,
  chartBorderColor: colors.lightGray,
  chartPointColor: colors.lightGray,
  chartBackgroundColor: 'rgba(255, 255, 255, 0.2)',
  ctaBackground: colors.lightGray,
  ctaText: colors.black,
  ctaHoverBackground: colors.darkGray,
};

export const AboutSection = styled.section<{ bgColor: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const AboutContent = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutText = styled.div<{ textColor: string }>`
  flex: 1;
  max-width: 500px;
  text-align: left;
  color: ${({ textColor }) => textColor};

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const ChartContainer = styled.div`
  flex: 1;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CTAButton = styled.a<{ bgColor: string; textColor: string; hoverBgColor: string }>`
  display: inline-block;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor};
  }
`;
