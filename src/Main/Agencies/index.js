import React from 'react';
import styled from 'styled-components';

import { WhiteSection, minWidth } from '../../assets';
import Slider from './Slider';

const Agencies = WhiteSection.extend`
  padding: 3rem 0;
  display: none;
  ${minWidth.md`
    display: block;
  `};
`;

const Title = styled.h2`
  vertical-align: middle;
  color: #5c5c5c;
  font-size: 4rem;
  text-align: center;
`;

export default () => (
  <Agencies>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-xl-10 col-xl-offset-1">
          <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
          <Slider />
        </div>
      </div>
    </div>
  </Agencies>
);
