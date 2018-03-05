import React from "react";
import styled from "styled-components";

import Header from "./Header";
import FormattedCurrency from "../../UI/FormattedCurrency";

const BestPrice = styled.div`
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

export default ({ data: { destination, prices } }) => {
  return (
    <BestPrice>
      <Header destination={destination} />
      {prices.map(({ price, origin }) => (
        <Row>
          <CityText>Из {origin}</CityText>
          <PriceText>
            от <FormattedCurrency value={price} />
          </PriceText>
        </Row>
      ))}
    </BestPrice>
  );
};
