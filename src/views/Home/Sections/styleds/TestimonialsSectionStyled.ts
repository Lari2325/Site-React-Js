import styled from 'styled-components';
import colors from '../../../../components/colors';

export const TestimonialsSection = styled.section<{ bgColor: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const TestimonialsContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  text-align: center;
`;

export const TestimonialCard = styled.div<{ bgColor: string; textColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px 10px;
`;

export const TestimonialText = styled.p<{ textColor: string }>`
  font-size: 1.1rem;
  color: ${({ textColor }) => textColor};
  font-family: 'Roboto', sans-serif;
`;

export const TestimonialAuthor = styled.h4<{ authorColor: string }>`
  color: ${({ authorColor }) => authorColor};
  margin-top: 10px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
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