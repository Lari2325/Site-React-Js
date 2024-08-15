// ContactFormSectionStyles.ts
import styled from 'styled-components';

export const ContactFormSection = styled.section<{ bgColor: string }>`
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

export const ContactFormContainer = styled.div<{ bgColor: string }>`
  width: 90%;
  max-width: 1400px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormLabel = styled.label<{ color: string }>`
  display: block;
  font-size: 1rem;
  color: ${({ color }) => color};
  margin-bottom: 8px;
`;

export const FormInput = styled.input<{ borderColor: string; focusBorderColor: string }>`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ focusBorderColor }) => focusBorderColor};
    outline: none;
  }
`;

export const FormTextarea = styled.textarea<{ borderColor: string; focusBorderColor: string }>`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ focusBorderColor }) => focusBorderColor};
    outline: none;
  }
`;

export const FormButton = styled.button<{ background: string; hoverBackground: string; textColor: string }>`
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