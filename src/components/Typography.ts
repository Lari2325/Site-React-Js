// Typography.ts
import styled from 'styled-components';
import colors from '../components/colors';

export const SectionTitle = styled.h2`
  color: ${colors.darkBlue};
  margin-bottom: 20px;
  font-size: 2rem; /* Font size for larger screens */
  
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Font size for smaller screens */
  }
`;

export const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: ${colors.darkGray};
  line-height: 1.5; /* Improved readability */
  
  @media (max-width: 768px) {
    font-size: 1rem; /* Font size for smaller screens */
  }
`;

export const CardTitle = styled.h3`
  color: ${colors.darkBlue};
  font-size: 1.5rem; /* Adjust as needed */
  
  @media (max-width: 768px) {
    font-size: 1.2rem; /* Font size for smaller screens */
  }
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${colors.darkGray};
  
  @media (max-width: 768px) {
    font-size: 0.9rem; /* Font size for smaller screens */
  }
`;