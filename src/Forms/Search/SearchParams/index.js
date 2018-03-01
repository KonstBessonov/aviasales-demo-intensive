import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import DirectionForm from "../../DirectionForm";

import { BlueSection, minWidth } from "../../../assets";
import Logo from "../../../UI/Logo";
import back from "./back.svg";

const SearchParams = BlueSection.extend`
  padding-bottom: 0;
  ${minWidth.md`
    padding-bottom: 3rem;
  `};
`;

const Header = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  ${minWidth.md`
    padding: 1rem;
  `};
`;

const Back = styled.button`
  background: url(${back});
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  flex: 0 0 auto;
  ${minWidth.md`
    display:none
  `};
`;

const ParamsTextWrapper = styled.div`
  flex: 1 1 auto;
  padding: 0 1rem 0 3rem;
  ${minWidth.md`
    display:none
  `};
`;

const Text = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.5rem;
`;

const RouteText = Text.extend``;

const DatePax = Text.extend`
  font-size: 1.5rem;
`;

const Currency = styled.button`
  background: none;
  border: 2px white solid;
  cursor: pointer;
  color: white;
  padding: 1rem 2rem;
  border-radius: 3rem;
  flex: 0 0 auto;
`;

const DirectionFormContainer = styled.div`
  display: none;
  ${minWidth.md`
    display: initial;
  `};
`;

export default () => {
  return (
    <SearchParams>
      <div className="container">
        <Header>
          <Logo />
          <Link to="/">
            <Back />
          </Link>
          <ParamsTextWrapper>
            <RouteText>Москва - Барселона</RouteText>
            <DatePax>24 фев - 3 март, 1 пассажир</DatePax>
          </ParamsTextWrapper>
          <Currency>RUB</Currency>
        </Header>
        <DirectionFormContainer>
          <DirectionForm compact />
        </DirectionFormContainer>
      </div>
    </SearchParams>
  );
};
