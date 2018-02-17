import styled, { css } from "styled-components";

export const WhiteSection = styled.section`
  font-size: 2rem;
  background: #ffffff;
  color: #4a4a4a;
`;

export const BlueSection = WhiteSection.extend`
  background: ${props => props.theme.blueGradient};
  color: #ffffff;
`;

export const theme = {
  displaySizes: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  },
  blueGradient: css`linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );`,
  hover: "#fd8a27"
};
