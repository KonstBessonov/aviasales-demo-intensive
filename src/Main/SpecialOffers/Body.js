import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormattedCurrency from '../../UI/FormattedCurrency';

const BodyStyled = styled.div`
  color: #242424;
  background: #ffffff;
  padding: 1rem;
  text-align: left;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0;
`;

const ImageWrapper = styled.div`
  flex: 0 1 auto;
  margin-right: 2rem;
`;

const Image = styled.img`
  width: 100%;
`;

const PriceDayWrapper = styled.div`
  flex: 0 0 auto;
`;

const Price = styled.div`
  text-align: right;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PriceSpan = styled.span`
  font-size: 2.5rem;
`;

const Days = styled.div`
  text-align: right;
  font-size: 1.5rem;
  color: #d93633;
`;

const OfferText = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  min-height: 8rem;
  margin-bottom: 3rem;
`;

const LinkStyled = styled.a`
  display: block;
  border: 2px solid #cd1f27;
  border-radius: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  color: #cd1f27;
  text-decoration: none;
  text-align: center;
  padding: 1.2rem;
`;

const Body = ({
  offer: {
    partner, price, days, text,
  },
}) => (
  <BodyStyled>
    <Details>
      <ImageWrapper>
        <Image src={partner} alt="" />
      </ImageWrapper>
      <PriceDayWrapper>
        <Price>
          от{' '}
          <PriceSpan>
            <FormattedCurrency value={price} />
          </PriceSpan>
        </Price>
        <Days>Осталось {days} дней</Days>
      </PriceDayWrapper>
    </Details>

    <OfferText>{text}</OfferText>
    <LinkStyled href="#">Узнать подробности</LinkStyled>
  </BodyStyled>
);

Body.propTypes = {
  offer: PropTypes.shape({}).isRequired,
};

export default Body;
