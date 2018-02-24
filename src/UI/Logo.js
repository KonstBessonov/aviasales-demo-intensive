import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { minWidth } from "../assets";
import logo from "./logo.svg";

const Logo = withRouter(styled.div`
  padding-top: 1rem;
  ${({ location }) =>
    location.pathname.includes("search") &&
    `padding-top: 0;
      flex: 1 1 auto;
      display: none;
      /* Media Query не работает - ломает строку CSS! */
      @media screen and (min-width: 768px) {
        display: initial;
      }`};
`);

const Image = styled.img`
  vertical-align: middle;
`;

const Text = styled.span`
  vertical-align: middle;
  font-size: 2.5rem;
  display: none;
  ${minWidth.md`
    display: initial;
  `};
`;

export default () => {
  return (
    <Logo>
      <Image src={logo} alt="logo" />
      <Text> aviasales</Text>
    </Logo>
  );
};
