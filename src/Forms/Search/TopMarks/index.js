import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { minWidth } from '../../../assets';

const marks = {
  cheapest: { background: '#83d40b', text: 'Самый дешевый', emoji: '🤑' },
  fastest: { background: '#af7542', text: 'Самый быстрый', emoji: '️⚡️' },
  best: { background: '#c279d1', text: 'Лучший билет', emoji: '😍' },
};

const TopMarkStyled = styled.div`
  font-size: 1.75rem;
  font-weight: 900;
  color: white;
  padding: 1rem;
  margin: 0 -8px;
  background: ${({ mark }) => marks[mark].background};
  ${minWidth.md`
    display: none;
  `};
`;

const TopMark = ({ mark }) => (
  <TopMarkStyled mark={mark}>
    {marks[mark].text} <span>{marks[mark].emoji}</span>
  </TopMarkStyled>
);

TopMark.propTypes = {
  mark: PropTypes.oneOf(['cheapest', 'fastest', 'best']).isRequired,
};

export default TopMark;
