import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import { displaySize } from "../assets";

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
  @media screen and (max-width: ${displaySize.md}) {
    display: none;
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
