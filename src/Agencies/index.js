import React from "react";
// import styled from "styled-components";

import { WhiteSection } from "../assets";
import Title from "./Title";
import Slider from "./Slider";

const Agencies = WhiteSection.extend`
  padding: 3rem 0;
  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

export default () => {
  return (
    <Agencies>
      <div className="container">
        <Title />
        <Slider />
      </div>
    </Agencies>
  );
};
