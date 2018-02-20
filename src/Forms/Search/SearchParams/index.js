import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlueSection } from "../../../assets";

import back from "./back.svg";

const SearchParams = BlueSection.extend`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
`;

const Back = styled.button`
  background: url(${back});
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  flex: 0 0 auto;
`;

const ParamsTextWrapper = styled.div`
  flex: 1 1 auto;
  padding: 0 1rem 0 3rem;
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
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  flex: 0 0 auto;
`;

export default () => {
  return (
    <SearchParams>
      <Link to="/">
        <Back />
      </Link>
      <ParamsTextWrapper>
        <RouteText>Москва - Барселона</RouteText>
        <DatePax>24 фев - 3 март, 1 пассажир</DatePax>
      </ParamsTextWrapper>
      <Currency>RUB </Currency>
    </SearchParams>
  );
};
