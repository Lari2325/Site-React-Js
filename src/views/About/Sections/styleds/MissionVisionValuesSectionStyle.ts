import styled from "styled-components";
import colors from "../../../../components/colors";

export const MissionVisionValuesContainer = styled.section<{ backgroundColor: string }>`
    padding: 2rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 200px;
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
`;

export const Card = styled.div<{ bgColor: string }>`
    flex: 1;
    background-color: ${({ bgColor }) => bgColor};
    min-width: 200px;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35);
    }
`;

export const CardTitle = styled.h4<{ color: string }>`
    margin: 10px 15px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    color: ${({ color }) => color};
`;

export const BoxIcon = styled.div<{ bgColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ bgColor }) => bgColor};
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    width: 80px;
    height: 80px;

    svg {
        font-size: 2rem;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  transition: background-color 0.3s, box-shadow 0.3s;
  width: fit-content;

  &:hover {
    background-color: ${colors.lightBlue};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;