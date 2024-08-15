import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useDarkMode } from "../../../context/DarkModeContext";
import AboutViewModel from "../../../viewmodels/AboutViewModel";
import { 
    DifferencesContainer, 
    ContainerCards, 
    Card, 
    CardTitle, 
    BoxIcon, 
    ContainerWhats, 
    WhatsAppCTAButton 
} from './styleds/DifferencesSectionStyle'; 
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

const DifferencesSection: React.FC = () => {
    const viewModel = new AboutViewModel();
    const { isDarkMode } = useDarkMode();
    const currentColors = isDarkMode ? darkModeColors : defaultColors;

    return (
        <DifferencesContainer backgroundColor={currentColors.sectionBackground}>
            <SectionTitle>{viewModel.getDifferentials()}</SectionTitle>
            <SectionDescription>{viewModel.getDifferentialsDescricao()}</SectionDescription>
            <ContainerCards>
                {viewModel.getCards().map((card, index) => (
                    <Card key={index} bgColor={currentColors.cardBackground}>
                        <BoxIcon bgColor={currentColors.iconBackground}>
                            {card.icon} 
                        </BoxIcon>
                        <CardTitle color={currentColors.textColor}>{card.title}</CardTitle>
                        <SectionDescription>{card.description}</SectionDescription>
                    </Card>
                ))}
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
        </DifferencesContainer>
    );
};

export default DifferencesSection;