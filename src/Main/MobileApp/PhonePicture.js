import React from "react";
import styled from "styled-components";
import { minWidth } from "../../assets";

import phone_sm from "./phone-sm.png";
import phone_lg from "./phone-lg.png";

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  padding: 0;
`;

const Picture = styled.picture`
  padding: 0;
  margin: 0;
  ${minWidth.md`
    position: absolute;
    bottom: 0;
    left: 0;
  `};
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default () => {
  return (
    <Wrapper>
      <Picture>
        <source srcSet={phone_lg} media={minWidth.md.asString} />
        <Img src={phone_sm} alt="" />
      </Picture>
    </Wrapper>
  );
};
