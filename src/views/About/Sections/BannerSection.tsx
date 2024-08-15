import React from 'react';
import AboutViewModel from '../../../viewmodels/AboutViewModel';
import { Title, AboutContainer } from './styleds/BannerSectionStyle'; 

const BannerSectionComponent: React.FC = () => {
    const viewModel = new AboutViewModel();

    return (
        <AboutContainer>
            <Title>{viewModel.getTitle()}</Title>
        </AboutContainer>
    );
};

export default BannerSectionComponent;