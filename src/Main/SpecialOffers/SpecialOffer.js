import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';

const Offer = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  background: #ffffff;
`;

const SpecialOffer = props => (
  <Offer>
    <Header offer={props.offer} />
    <Body offer={props.offer} />
  </Offer>
);

SpecialOffer.propTypes = {
  offer: PropTypes.shape({}).isRequired,
};

export default SpecialOffer;
