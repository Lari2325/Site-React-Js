import React from 'react';
import ContactViewModel from '../../../viewmodels/ContactViewModel';
import { Title, AboutContainer } from './styleds/BannerSectionStyle'; 

const BannerSectionComponent: React.FC = () => {
    const viewModel = new ContactViewModel();

    return (
        <AboutContainer>
            <Title>{viewModel.getTitle()}</Title>
        </AboutContainer>
    );
};

export default BannerSectionComponent;