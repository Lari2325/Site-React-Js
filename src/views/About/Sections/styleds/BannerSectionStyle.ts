import styled from "styled-components";
import colors from "../../../../components/colors";

export const Title = styled.h1`
  color: ${colors.mediumBlue};
  margin: 0;
  padding: 0;
  font-size: 3rem;
`;

export const AboutContainer = styled.section`
  padding: 2rem;
  background-color: ${colors.lightBlue};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 200px;
`;
