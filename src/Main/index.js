import React from "react";
import styled from "styled-components";

import MainForm from "./MainForm";
import TopDestination from "./TopDestination";
import BestPrices from "./BestPrices";
import Agencies from "./Agencies";
import Subscribe from "./Subscribe";
import SpecialOffers from "./SpecialOffers";
import Articles from "./Articles";
import MobileApp from "./MobileApp";

const Main = styled.div``;

export default () => {
  return (
    <Main>
      <MainForm />
      <TopDestination />
      <BestPrices />
      <Agencies />
      <Subscribe />
      <SpecialOffers />
      <Articles />
      <MobileApp />
    </Main>
  );
};
