import React, { useState } from 'react';
import { 
  ContactFormSection, 
  ContactFormContainer, 
  FormGroup, 
  FormRow, 
  FormLabel, 
  FormInput, 
  FormTextarea, 
  FormButton 
} from './styleds/ContactSectionStyled'; 
import colors from '../../../components/colors';
import { SectionTitle, SectionDescription } from '../../../components/Typography';
import { useDarkMode } from '../../../context/DarkModeContext';
import { ContactModel } from '../../../models/HomeModel';


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

const ContactFormSectionComponent: React.FC = () => {
  const { isDarkMode } = useDarkMode();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const response = await fetch('https://lari2325.github.io/Site-React-Js/backend/send_mail.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData as Record<string, string>).toString()
      });

      if (response.ok) {
          console.log('Mensagem enviada com sucesso!');
      } else {
          console.error('Falha ao enviar a mensagem.');
      }
  };

  return (
    <ContactFormSection bgColor={currentColors.background}>
      <ContactFormContainer bgColor={currentColors.containerBackground}>
        <SectionTitle>{ContactModel.title}</SectionTitle>
        <SectionDescription>
          {ContactModel.description}
        </SectionDescription>
        <form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup style={{ flex: 1 }}>
              <FormLabel color={currentColors.labelColor} htmlFor="name">{ContactModel.name}</FormLabel>
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
              <FormLabel color={currentColors.labelColor} htmlFor="email">{ContactModel.email}</FormLabel>
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
              <FormLabel color={currentColors.labelColor} htmlFor="phone">{ContactModel.phone}</FormLabel>
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
              <FormLabel color={currentColors.labelColor} htmlFor="subject">{ContactModel.subject}</FormLabel>
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
            <FormLabel color={currentColors.labelColor} htmlFor="message">{ContactModel.message}</FormLabel>
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
            {ContactModel.button}
          </FormButton>
        </form>
      </ContactFormContainer>
    </ContactFormSection>
  );
};

export default ContactFormSectionComponent;