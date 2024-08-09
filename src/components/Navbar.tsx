import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './colors';
import { FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';

const defaultColors = {
  background: colors.darkGray,
  text: colors.white,
  buttonBackground: colors.mediumBlue,
  buttonHover: colors.lightBlue
};

const darkModeColors = {
  background: colors.black,
  text: colors.lightGray,
  buttonBackground: colors.darkBlue,
  buttonHover: colors.lightGray
};

const HeaderContainer = styled.header<{ fixed: boolean, bgColor: string }>`
  width: 100%;
  height: 10vh;
  background-color: ${({ bgColor }) => bgColor};
  position: ${({ fixed }) => (fixed ? 'fixed' : 'static')};
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarContainer = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavLinks = styled.div<{ open: boolean, textColor: string }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ textColor }) => textColor};

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ textColor }) => textColor};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    z-index: 999;
  }
`;

const NavLink = styled(Link)`
  color: inherit;  
  text-decoration: none;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    color: ${colors.darkCardBackground};
  }

  &:hover {
    text-decoration: underline;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  position: relative;
  z-index: 1001;

  @media (min-width: 769px) {
    display: none;
  }
`;

const ToggleIcon = styled.div<{ open: boolean }>`
  width: 30px;
  height: 25px;
  position: relative;

  &::before,
  &::after,
  & > div {
    content: '';
    width: 30px;
    height: 3px;
    background-color: ${colors.darkCardBackground};
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: ${({ open }) => (open ? '50%' : '5px')};
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    transform-origin: center;
  }

  &::after {
    top: ${({ open }) => (open ? '50%' : '20px')};
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    transform-origin: center;
  }

  & > div {
    top: 50%;
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
`;

const WhatsAppButton = styled.a<{ buttonBackground: string, buttonHover: string }>`
  display: flex;
  align-items: center;
  color: ${colors.white};
  text-decoration: none;
  margin: 0 0 0 1rem;
  font-size: 1.2rem;
  padding: 0.3rem 2rem;
  background-color: ${({ buttonBackground }) => buttonBackground};
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${({ buttonHover }) => buttonHover};
    color: ${colors.white};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: 8px;
    font-size: 1.4rem;
  }
`;

const ModeToggleButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      color: ${colors.darkCardBackground};
    }
`;

const Navbar: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentColors = isDarkMode ? darkModeColors : defaultColors;

  return (
    <HeaderContainer fixed={isFixed} bgColor={currentColors.background}>
      <NavbarContainer>
        <div>
          <h1 style={{ color: currentColors.text }}>My App</h1>
        </div>
        <ToggleButton onClick={toggleMenu}>
          <ToggleIcon open={isOpen}>
            <div></div>
          </ToggleIcon>
        </ToggleButton>
        <NavLinks open={isOpen} textColor={currentColors.text}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <WhatsAppButton 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            buttonBackground={currentColors.buttonBackground}
            buttonHover={currentColors.buttonHover}
          >
            <FaWhatsapp />
            Fale Conosco
          </WhatsAppButton>
          <ModeToggleButton onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ModeToggleButton>
        </NavLinks>
      </NavbarContainer>
    </HeaderContainer>
  );
};

export default Navbar;