import React from 'react';
import styled from 'styled-components';
import { WhiteSection } from '../../assets';
import compass from './compass.svg';
import pen from './pen.svg';

import Category from './Category';
import Destination from './Destination';
import { category, destination } from './data';

const TopDestination = WhiteSection.extend`
  margin: 5rem 0;
`;

const Compass = styled.img`
  display: inline-block;
`;

const OriginText = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 3rem;
  color: #4a4a4a;
  margin-bottom: 7rem;
`;

const OriginCity = styled.button`
  color: #00ace2;
  border: none;
  cursor: pointer;
  background: none;
  &:hover {
    color: ${props => props.theme.hover};
  }
`;

const Img = styled.img`
  border: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

export default () => (
  <TopDestination>
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12 col-md-8 col-xl-4">
          <Compass src={compass} alt="compass" />
          <OriginText>
            Популярные направления перелетов из города{' '}
            <OriginCity>
              Москва <Img src={pen} />
            </OriginCity>
          </OriginText>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-4 col-md col-md-offset-1 col-xl-1">
          <Category category={category.anywhere} isActive />
        </div>
        <div className="col-xs-4 col-md col-xl-1">
          <Category category={category.sea} />
        </div>
        <div className="col-xs-4 col-md col-xl-1">
          <Category category={category.shop} />
        </div>
        <div className="col-xs-4 col-md col-xl-1">
          <Category category={category.culture} />
        </div>
        <div className="col-xs-4 col-md col-xl-1">
          <Category category={category.nightlife} />
        </div>
        <div className="col-xs-4 col-md col-xl-1">
          <Category category={category.child} />
        </div>
        <div className="col-md-1 hidden-xl" />
      </div>
      <div className="row center-md">
        <div className="col-xs-12 col-md-10 col-xl-5">
          <Destination destination={destination[0]} />
        </div>
        <div className="col-xs-12 col-md-10 col-xl-5">
          <Destination destination={destination[1]} />
        </div>
        <div className="col-xs-12 col-md-10 col-xl-5">
          <Destination destination={destination[2]} />
        </div>
        <div className="col-xs-12 col-md-10 col-xl-5">
          <Destination destination={destination[3]} />
        </div>
        <div className="col-xs-12 col-md-10 col-xl-5">
          <Destination destination={destination[4]} />
        </div>
        <div className="col-xs-12 col-md-10 col-xl-5">
          <Destination destination={destination[5]} />
        </div>
      </div>
    </div>
  </TopDestination>
);
