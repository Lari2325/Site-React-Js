import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../../components/colors';
import { SectionTitle, SectionDescription } from '../../../components/Typography';
import { useDarkMode } from '../../../context/DarkModeContext';

const defaultColors = {
  background: colors.white,
  containerBackground: colors.white,
  labelColor: colors.darkBlue,
  inputBorderColor: colors.darkGray,
  inputFocusBorderColor: colors.darkBlue,
  buttonBackground: colors.darkBlue,
  buttonHoverBackground: colors.darkBlue + 'cc',
  buttonText: colors.white,
};

const darkModeColors = {
  background: colors.black,
  containerBackground: colors.black,
  labelColor: colors.white,
  inputBorderColor: colors.darkGray,
  inputFocusBorderColor: colors.lightBlue,
  buttonBackground: colors.mediumGray,
  buttonHoverBackground: colors.darkGray,
  buttonText: colors.lightGray,
};

const ContactFormSection = styled.section<{ bgColor: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const ContactFormContainer = styled.div<{ bgColor: string }>`
  width: 90%;
  max-width: 1400px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;
  box-sizing: border-box; // Ensures padding and border are included in the element's total width and height
  padding: 20px; // Add some padding inside the container
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px; // Space between fields
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormLabel = styled.label<{ color: string }>`
  display: block;
  font-size: 1rem;
  color: ${({ color }) => color};
  margin-bottom: 8px;
`;

const FormInput = styled.input<{ borderColor: string; focusBorderColor: string }>`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;
  box-sizing: border-box; // Ensures padding and border are included in the element's total width and height
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ focusBorderColor }) => focusBorderColor};
    outline: none;
  }
`;

const FormTextarea = styled.textarea<{ borderColor: string; focusBorderColor: string }>`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box; // Ensures padding and border are included in the element's total width and height
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ focusBorderColor }) => focusBorderColor};
    outline: none;
  }
`;

const FormButton = styled.button<{ background: string; hoverBackground: string; textColor: string }>`
  font-size: 1.2rem;
  color: ${({ textColor }) => textColor};
  background: ${({ background }) => background};
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ hoverBackground }) => hoverBackground};
  }
`;

const ContactFormSectionComponent: React.FC = () => {
  const { isDarkMode } = useDarkMode(); // Usa o hook para acessar o estado do modo escuro

  // Seleciona as cores baseadas no modo escuro ou claro
  const currentColors = isDarkMode ? darkModeColors : defaultColors;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form data submitted:', formData);
  };

  return (
    <ContactFormSection bgColor={currentColors.background}>
      <ContactFormContainer bgColor={currentColors.containerBackground}>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionDescription>
          If you have any questions or need further information, please reach out to us through the form below.
        </SectionDescription>
        <form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup style={{ flex: 1 }}>
              <FormLabel color={currentColors.labelColor} htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                borderColor={currentColors.inputBorderColor}
                focusBorderColor={currentColors.inputFocusBorderColor}
                required
              />
            </FormGroup>
            <FormGroup style={{ flex: 1 }}>
              <FormLabel color={currentColors.labelColor} htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                borderColor={currentColors.inputBorderColor}
                focusBorderColor={currentColors.inputFocusBorderColor}
                required
              />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup style={{ flex: 1 }}>
              <FormLabel color={currentColors.labelColor} htmlFor="phone">Phone</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                borderColor={currentColors.inputBorderColor}
                focusBorderColor={currentColors.inputFocusBorderColor}
              />
            </FormGroup>
            <FormGroup style={{ flex: 1 }}>
              <FormLabel color={currentColors.labelColor} htmlFor="subject">Subject</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                borderColor={currentColors.inputBorderColor}
                focusBorderColor={currentColors.inputFocusBorderColor}
                required
              />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <FormLabel color={currentColors.labelColor} htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              borderColor={currentColors.inputBorderColor}
              focusBorderColor={currentColors.inputFocusBorderColor}
              required
            />
          </FormGroup>
          <FormButton
            type="submit"
            background={currentColors.buttonBackground}
            hoverBackground={currentColors.buttonHoverBackground}
            textColor={currentColors.buttonText}
          >
            Send
          </FormButton>
        </form>
      </ContactFormContainer>
    </ContactFormSection>
  );
};

export default ContactFormSectionComponent;
