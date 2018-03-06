import React from 'react';
import styled from 'styled-components';
import { minWidth } from '../../assets';
import filter from './filter.svg';

const TopSeparator = styled.div`
  padding: 4rem;
  text-align: center;
  ${minWidth.md`
  padding: 2rem;
  `};
`;

const ScrollTop = styled.button`
  position: fixed;
  top: 12rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: #00ace2;
  border: none;
  border-radius: 3rem;
  padding: 1rem 4rem;
  ${minWidth.md`
    display: none;
  `};
`;

const Filter = styled.button`
  border: none;
  border-radius: 2rem;
  color: white;
  background-color: #00ace2;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${filter});
  padding: 3rem 4rem;
  cursor: pointer;
  display: none;
  ${minWidth.md`
    display: initial;
  `};
  ${minWidth.xl`
    display: none;
  `};
`;

export default () => (
  <TopSeparator>
    <ScrollTop onClick={() => window.scrollTo(0, 0)}>НАВЕРХ</ScrollTop>
    <Filter />
  </TopSeparator>
);
