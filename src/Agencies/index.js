import React from "react";
import styled from "styled-components";

import { WhiteSection, displaySize } from "../assets";
import Slider from "./Slider";

const Agencies = WhiteSection.extend`
  padding: 3rem 0;
  @media screen and (max-width: ${displaySize.md}) {
    display: none;
  }
`;

const Title = styled.h2`
  vertical-align: middle;
  color: ##5c5c5c;
  font-size: 4rem;
  text-align: center;
`;

export default () => {
  return (
    <Agencies>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xl-10 col-xl-offset-1">
            <Title>
              Дешевые авиабилеты от крупнейших авиакомпаний и агентств
            </Title>
            <Slider />
          </div>
        </div>
      </div>
    </Agencies>
  );
};
