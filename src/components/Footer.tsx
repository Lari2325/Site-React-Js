import React from 'react';
import styled from 'styled-components';
import colors from './colors';
import { useDarkMode } from '../context/DarkModeContext';

const defaultColors = {
  background: colors.darkBlue,
  text: colors.white,
  footerContentBackground: colors.darkBlue,
  footerCopyrightBackground: colors.darkGray,
  link: colors.white,
  linkHover: colors.lightGray,
};

const darkModeColors = {
  background: colors.darkCardBackground,
  text: colors.lightGray,
  footerContentBackground: colors.darkCardBackground,
  footerCopyrightBackground: colors.darkCardBackground,
  link: colors.lightGray,
  linkHover: colors.white,
};

const FooterContainer = styled.footer<{ bgColor: string; textColor: string }>`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0 0;
`;

const FooterContent = styled.div<{ bgColor: string }>`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  gap: 50px;
  background-color: ${({ bgColor }) => bgColor};
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    max-width: none;
    margin-bottom: 20px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const FooterLink = styled.a<{ linkColor: string; linkHoverColor: string }>`
  color: ${({ linkColor }) => linkColor};
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    color: ${({ linkHoverColor }) => linkHoverColor};
    text-decoration: underline;
  }
`;

const FooterTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 1.2rem;
`;

const FooterCopyright = styled.div<{ bgColor: string }>`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  padding: 10px 0;
  text-align: center;
`;

const Footer: React.FC = () => {
  const { isDarkMode } = useDarkMode(); 

  const currentColors = isDarkMode ? darkModeColors : defaultColors;

  return (
    <FooterContainer bgColor={currentColors.background} textColor={currentColors.text}>
      <FooterContent bgColor={currentColors.footerContentBackground}>
        <Column>
          <FooterTitle>Menu</FooterTitle>
          <FooterLink href="/" linkColor={currentColors.link} linkHoverColor={currentColors.linkHover}>Home</FooterLink>
          <FooterLink href="/about" linkColor={currentColors.link} linkHoverColor={currentColors.linkHover}>About</FooterLink>
          <FooterLink href="/contact" linkColor={currentColors.link} linkHoverColor={currentColors.linkHover}>Contact</FooterLink>
        </Column>
        <Column>
          <FooterTitle>Endereço</FooterTitle>
          <FooterText>Rua Exemplo, 123</FooterText>
          <FooterText>Cidade, Estado, 00000-000</FooterText>
        </Column>
        <Column>
          <FooterTitle>Contato</FooterTitle>
          <FooterText>Email: <FooterLink href="mailto:contact@example.com" linkColor={currentColors.link} linkHoverColor={currentColors.linkHover}>contact@example.com</FooterLink></FooterText>
          <FooterText>Telefone: (00) 0000-0000</FooterText>
        </Column>
      </FooterContent>
      <FooterCopyright bgColor={currentColors.footerCopyrightBackground}>
        <FooterText>
          © 2024 Your Company Name. All rights reserved.
          <FooterLink href="/privacy-policy" linkColor={currentColors.link} linkHoverColor={currentColors.linkHover}>Privacy Policy</FooterLink>
          <FooterLink href="/terms-of-service" linkColor={currentColors.link} linkHoverColor={currentColors.linkHover}>Terms of Service</FooterLink>
        </FooterText>
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;