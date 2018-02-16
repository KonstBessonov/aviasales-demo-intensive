import React from "react";
import styled from "styled-components";
import { displaySize } from "../assets";

import phone_sm from "./phone-sm.png";
import phone_lg from "./phone-lg.png";

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

const Picture = styled.picture`
  @media screen and (min-width: ${displaySize.md}) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Picture>
        <source srcSet={phone_lg} media="(min-width: 48rem)" />
        <img src={phone_sm} alt="" />
      </Picture>
    </Wrapper>
  );
};
