// src/components/WhatsAppFloatButton.tsx
import React from 'react';
import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa'; // Importa o ícone de telefone
import colors from './colors';

// Estilo para o botão flutuante do WhatsApp
const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25D366; // Cor verde do WhatsApp
  color: ${colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-size: 24px;
  z-index: 1000;
  
  &:hover {
    background-color: #128C7E; // Cor mais escura do WhatsApp ao passar o mouse
  }
`;

// Estilo para o ícone
const Icon = styled(FaPhone)`
  color: ${colors.black}; // Cor preta para o ícone
  font-size: 24px;
`;

const WhatsAppFloatButton: React.FC = () => {
  return (
    <WhatsAppButton href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
      <Icon />
    </WhatsAppButton>
  );
};

export default WhatsAppFloatButton;