import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { useDarkMode } from "../../../context/DarkModeContext";
import AboutViewModel from '../../../viewmodels/AboutViewModel';
import { 
    MissionVisionValuesContainer, 
    ContainerCards, 
    Card, 
    CardTitle, 
    BoxIcon, 
    ContainerWhats, 
    WhatsAppCTAButton 
} from './styleds/MissionVisionValuesSectionStyle'; 
import { SectionTitle, SectionDescription } from '../../../components/Typography';
import colors from '../../../components/colors';

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

const MissionVisionValuesSection: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    const viewModel = new AboutViewModel();

    const currentColors = isDarkMode ? darkModeColors : defaultColors;
    const { mission, vision, values, missionIcon, visionIcon, valuesIcon } = viewModel.getMissionVisionValues();
    const missionVisionSectionTitle = viewModel.getMissionVisionSectionTitle();
    const cardTitles = viewModel.getCardTitles();
    const whatsAppLink = viewModel.getWhatsAppLink();
    const button = viewModel.getButtonMissionVisionSection();

    return (
        <MissionVisionValuesContainer backgroundColor={currentColors.sectionBackground}>
            <SectionTitle>{missionVisionSectionTitle}</SectionTitle>
            <ContainerCards>
                <Card bgColor={currentColors.cardBackground}>
                    <BoxIcon bgColor={currentColors.iconBackground}>
                        {missionIcon}
                    </BoxIcon>
                    <CardTitle color={currentColors.textColor}>{cardTitles.mission}</CardTitle>
                    <SectionDescription>{mission}</SectionDescription>
                </Card>
                <Card bgColor={currentColors.cardBackground}>
                    <BoxIcon bgColor={currentColors.iconBackground}>
                        {visionIcon}
                    </BoxIcon>
                    <CardTitle color={currentColors.textColor}>{cardTitles.vision}</CardTitle>
                    <SectionDescription>{vision}</SectionDescription>
                </Card>
                <Card bgColor={currentColors.cardBackground}>
                    <BoxIcon bgColor={currentColors.iconBackground}>
                        {valuesIcon}
                    </BoxIcon>
                    <CardTitle color={currentColors.textColor}>{cardTitles.values}</CardTitle>
                    <SectionDescription>{values}</SectionDescription>
                </Card>
            </ContainerCards>

            <ContainerWhats>
                <WhatsAppCTAButton 
                    href={whatsAppLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                    {button} 
                </WhatsAppCTAButton>
            </ContainerWhats>
        </MissionVisionValuesContainer>
    );
};

export default MissionVisionValuesSection;