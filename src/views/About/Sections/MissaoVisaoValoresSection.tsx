import React from 'react';
import styled from "styled-components";
import colors from "../../../components/colors";
import { SectionTitle, SectionDescription } from '../../../components/Typography';
import { FaWhatsapp } from "react-icons/fa";
import { useDarkMode } from "../../../context/DarkModeContext";
import AboutViewModel from '../../../viewmodels/AboutViewModel'; // Importe o AboutViewModel

const defaultColors = {
    cardBackground: colors.white,
    sectionBackground: colors.white,
    textColor: colors.darkBlue,
    iconBackground: colors.white,
};

const darkModeColors = {
    cardBackground: colors.darkCardBackground,
    sectionBackground: colors.darkBackground,
    textColor: colors.lightGray,
    iconBackground: colors.darkBackground,
};

const MissionVisionValuesContainer = styled.section<{ backgroundColor: string }>`
    padding: 2rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 200px;
`;

const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
`;

const Card = styled.div<{ bgColor: string }>`
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

const CardTitle = styled.h4<{ color: string }>`
    margin: 10px 15px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    color: ${({ color }) => color};
`;

const BoxIcon = styled.div<{ bgColor: string }>`
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
`;

const ContainerWhats = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const WhatsAppCTAButton = styled.a`
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

const MissionVisionValuesSection: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    const viewModel = new AboutViewModel(); // Crie uma instância do AboutViewModel

    const currentColors = isDarkMode ? darkModeColors : defaultColors;
    const missionVisionValues = viewModel.getMissionVisionValues();

    return (
        <MissionVisionValuesContainer backgroundColor={currentColors.sectionBackground}>
            <SectionTitle>Mission, Vision, and Values</SectionTitle>
            <ContainerCards>
                <Card bgColor={currentColors.cardBackground}>
                    <BoxIcon bgColor={currentColors.iconBackground}>
                        {missionVisionValues.missionIcon}
                    </BoxIcon>
                    <CardTitle color={currentColors.textColor}>Mission</CardTitle>
                    <SectionDescription>{missionVisionValues.mission}</SectionDescription>
                </Card>
                <Card bgColor={currentColors.cardBackground}>
                    <BoxIcon bgColor={currentColors.iconBackground}>
                        {missionVisionValues.visionIcon}
                    </BoxIcon>
                    <CardTitle color={currentColors.textColor}>Vision</CardTitle>
                    <SectionDescription>{missionVisionValues.vision}</SectionDescription>
                </Card>
                <Card bgColor={currentColors.cardBackground}>
                    <BoxIcon bgColor={currentColors.iconBackground}>
                        {missionVisionValues.valuesIcon}
                    </BoxIcon>
                    <CardTitle color={currentColors.textColor}>Values</CardTitle>
                    <SectionDescription>{missionVisionValues.values}</SectionDescription>
                </Card>
            </ContainerCards>

            <ContainerWhats>
                <WhatsAppCTAButton 
                    href={viewModel.getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                    Contact Us
                </WhatsAppCTAButton>
            </ContainerWhats>
        </MissionVisionValuesContainer>
    );
};

export default MissionVisionValuesSection;