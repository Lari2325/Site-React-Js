import React from 'react';
import AboutViewModel from '../../viewmodels/AboutViewModel';
import styled from 'styled-components';
import colors from '../../components/colors';

const AboutContainer = styled.div`
  padding: 2rem;
  background-color: ${colors.lightGray};
  color: ${colors.darkGray};
  text-align: center;
`;

const Title = styled.h1`
  color: ${colors.darkBlue};
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${colors.darkGray};
`;

const About: React.FC = () => {
  const viewModel = new AboutViewModel();

  return (
    <AboutContainer>
      <Title>{viewModel.getTitle()}</Title>
      <Description>{viewModel.getDescription()}</Description>
    </AboutContainer>
  );
};

export default About;