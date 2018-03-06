import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';
import aeroflot from './aeroflot.png';
import s7 from './s7.png';
import ott from './ott.png';
import korean from './korean.png';
import israel from './israel.png';
import dotEmpty from './dot-e.svg';
import dotFull from './dot-f.svg';

const Slider = styled.div`
  margin: 1rem 0;
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
`;

const Back = styled.button`
  border: none;
  background: url(${arrow}) center no-repeat;
  width: 20px;
  height: 34px;
  padding: 0;
  cursor: pointer;
`;

const Forward = Back.extend`
  transform: scale(-1, 1);
`;

const Page = styled.div`
  flex-grow: 1;
`;

const Slides = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Slide = styled.img`
  margin: 1.25rem;
`;

const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageDot = styled.button`
  border: none;
  background: url(${props => (props.current ? dotFull : dotEmpty)}) center no-repeat;
  width: 20px;
  height: 34px;
  padding: 0;
  cursor: pointer;
`;

export default () => (
  <Slider>
    <Pages>
      <Back />
      <Page>
        <Slides>
          <Slide src={aeroflot} />
          <Slide src={s7} />
          <Slide src={ott} />
          <Slide src={korean} />
          <Slide src={israel} />
        </Slides>
      </Page>
      <Forward />
    </Pages>
    <Indicator>
      <PageDot current />
      <PageDot />
      <PageDot />
    </Indicator>
  </Slider>
);
