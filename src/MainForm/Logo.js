import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Logo = styled.div`
  padding-top: 1rem;
  position: relative;
`;

const Image = styled.img`
  vertical-align: middle;
`;

const Text = styled.span`
  vertical-align: middle;
  font-size: 2.5rem;
  display: none;
  @media screen and (min-width: ${props => props.theme.displaySizes.md}) {
    display: initial;
  }
`;

export default () => {
  return (
    <Logo>
      <Image src={logo} alt="logo" />
      <Text> aviasales</Text>
    </Logo>
  );
};
