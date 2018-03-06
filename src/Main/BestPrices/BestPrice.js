import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import FormattedCurrency from '../../UI/FormattedCurrency';

const BestPriceStyled = styled.div`
  margin-top: 3rem;
  padding-bottom: 3rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const CityText = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
`;

const PriceText = styled.div`
  color: #00bae8;
  font-size: 2rem;
  line-height: 2.5rem;
`;

const BestPrice = ({ data: { destination, prices } }) => (
  <BestPriceStyled>
    <Header destination={destination} />
    {prices.map(({ origin, price }) => (
      <Row>
        <CityText>Из {origin}</CityText>
        <PriceText>
          от <FormattedCurrency value={price} />
        </PriceText>
      </Row>
    ))}
  </BestPriceStyled>
);

BestPrice.propTypes = {
  data: PropTypes.shape({
    destination: PropTypes.shape({}).isRequired,
    prices: PropTypes.arrayOf(PropTypes.shape({
      origin: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default BestPrice;
