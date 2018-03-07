import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pluralize from 'pluralize-ru';
import { partners } from '../data';

import FormattedCurrency from '../../../UI/FormattedCurrency';

const pluralizeOffers = qty =>
  pluralize(qty, '%d предложений', '%d предложение', '%d предложения', '%d предложений');

const OtherOffersStyled = styled.div`
  color: #59bce5;
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-top: 3rem;
`;

const OfferWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const offerProp = {
  partnerId: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

const Offer = ({ data }) => (
  <OfferWrapper>
    <span>{partners[data.partnerId]}</span>
    <FormattedCurrency value={data.price} />
  </OfferWrapper>
);

Offer.propTypes = {
  data: PropTypes.shape(offerProp).isRequired,
};

const MoreOffersWrapper = styled.div`
  margin-top: 1rem;
`;

const MoreOffers = ({ prices }) => (
  <MoreOffersWrapper>+ Ещё {pluralizeOffers(prices.length)}</MoreOffersWrapper>
);

MoreOffers.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.shape(offerProp)).isRequired,
};

// const MoreOffersWrapper = styled.div`
//   margin-top: 1rem;
// `;

const OtherOffers = ({ prices }) => (
  <OtherOffersStyled>
    <Offer data={prices[0]} />
    <Offer data={prices[1]} />
    {prices.length > 2 && <MoreOffers prices={prices.slice(2)} />}
  </OtherOffersStyled>
);

OtherOffers.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.shape(offerProp)).isRequired,
};

export default OtherOffers;
