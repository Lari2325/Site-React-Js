import styled from 'styled-components';
import colors from '../../../../components/colors';

export const PortfolioSectionContainer = styled.section<{ bgColor: string }>`
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

export const PortfolioGrid = styled.div`
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

export const PortfolioItem = styled.div<{ bgCard: string }>`
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

export const PortfolioImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const PortfolioDescription = styled.p`
  padding: 15px;
  font-size: 1rem;
  color: ${colors.darkGray};
`;

export const ModalBackground = styled.div<{ isVisible: boolean }>`
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

export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  width: 80%;
  max-width: 430px;
  padding: 20px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const ModalCloseButton = styled.button`
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

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 75vh;
  max-width: 400px;
  border-radius: 10px;
  margin-bottom: 15px;
  object-fit: cover;
`;

export const ContactButton = styled.a`
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

export const ContainerWhats = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const WhatsAppCTAButton = styled.a`
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