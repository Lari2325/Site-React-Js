import React from 'react';
import ContactViewModel from '../../viewmodels/ContactViewModel';
import styled from 'styled-components';
import colors from '../../components/colors';

const ContactContainer = styled.div`
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

const Contact: React.FC = () => {
  const viewModel = new ContactViewModel();

  return (
    <ContactContainer>
      <Title>{viewModel.getTitle()}</Title>
      <Description>{viewModel.getDescription()}</Description>
    </ContactContainer>
  );
};

export default Contact;
