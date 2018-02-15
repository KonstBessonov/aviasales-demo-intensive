import React from "react";
import styled from "styled-components";
import phone_sm from "./phone_sm.png";
import phone_lg from "./phone_lg.png";

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

const Picture = styled.picture`
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

// @media screen and (min-width: 75rem) {
//   position: absolute;
//   bottom: 0;
//   margin-left: 8.33333333333%;
// }

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
