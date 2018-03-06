import React from 'react';
import styled from 'styled-components';
import { minWidth } from '../../assets';

import phoneSmall from './phone-sm.png';
import phoneLarge from './phone-lg.png';

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

export default () => (
  <Wrapper>
    <Picture>
      <source srcSet={phoneLarge} media={minWidth.md.asString} />
      <Img src={phoneSmall} alt="" />
    </Picture>
  </Wrapper>
);
