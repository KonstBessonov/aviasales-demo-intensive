import React from 'react';
import styled from 'styled-components';
import { BlueSection, minWidth } from '../../assets';

import SpecialOffer from './SpecialOffer';
import specialOffers from './data';

const SpecialOffers = BlueSection.extend`
  padding-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  padding: 2rem 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  ${minWidth.md`
    flex-direction: row;
    justify-content: space-between;
  `};
`;

const LinkStyled = styled.a`
  color: inherit;
  transition: color 0.3s;
  &:hover {
    color: ${props => props.theme.hover};
  }
`;

const StarNote = styled.div`
  margin-top: 1rem;
`;

export default () => (
  <SpecialOffers>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-xl col-xl-offset-1">
          <Title>Спецпредложения на авиабилеты</Title>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="row center-xl">
            <div className="col-xs-12 col-md-4 col-xl-3 col-xl-offset-1">
              <SpecialOffer offer={specialOffers[0]} />
            </div>
            <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl" />
            <div className="col-xs-12 col-md-4 col-xl-3">
              <SpecialOffer offer={specialOffers[1]} />
            </div>
            <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl" />
            <div className="col-xs-12 col-md-4 col-xl-3">
              <SpecialOffer offer={specialOffers[2]} />
            </div>
            <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-1" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-xl-10 col-xl-offset-1">
          <Footer>
            <LinkStyled href="#">Смотреть все спецпредложения</LinkStyled>
            <StarNote>* средняя цена по направлению</StarNote>
          </Footer>
        </div>
      </div>
    </div>
  </SpecialOffers>
);
