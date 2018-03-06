import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { minWidth } from '../../../assets';

const BadgesStyled = styled.div`
  justify-content: flex-end;
  flex-grow: 1;
  padding: 0 1.5rem;
  font-size: 1.25rem;
  line-height: 2rem;
  color: #2196f3;
  display: none;
  ${minWidth.md`
    display: flex;
  `};
`;

const Badge = styled.span`
  border: 1px solid #2196f3;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
`;

const Badges = ({ badges }) => (
  <BadgesStyled>{!!badges.isCharter && <Badge>ЧАРТЕР</Badge>}</BadgesStyled>
);

Badges.propTypes = {
  badges: PropTypes.shape({ isCharter: PropTypes.bool }).isRequired,
};

export default Badges;
