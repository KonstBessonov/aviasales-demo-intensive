import React from "react";
import styled, { css } from "styled-components";

import Header from "./Header";

const BestPrice = styled.div`
  margin-top: 3rem;
  padding-bottom: 3rem;
  ${props =>
    props.last ||
    css`
      border-bottom: 1px dashed #afbec6;
      @media screen and (min-width: 75rem) {
      padding-right: 3rem;
      padding-bottom: 0;
      border-right: 1px dashed #afbec6;
      border-bottom: none;
    `}
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const CityText = styled.div`
  font-size: 2rem;
`;

const PriceText = styled.div`
  color: #00bae8;
  font-size: 2rem;
`;

//ToDo: переделать на цикл по элементам массива!
export default props => {
  return (
    <BestPrice last={props.last}>
      <Header destination={props.data.destination} />
      <Row>
        <CityText>Из {props.data.prices[0].origin}</CityText>
        <PriceText>от {props.data.prices[0].price} &#x20BD;</PriceText>
      </Row>
      <Row>
        <CityText>Из {props.data.prices[1].origin}</CityText>
        <PriceText>от {props.data.prices[1].price} &#x20BD;</PriceText>
      </Row>
      <Row>
        <CityText>Из {props.data.prices[2].origin}</CityText>
        <PriceText>от {props.data.prices[2].price} &#x20BD;</PriceText>
      </Row>
      <Row>
        <CityText>Из {props.data.prices[3].origin}</CityText>
        <PriceText>от {props.data.prices[3].price} &#x20BD;</PriceText>
      </Row>
      <Row>
        <CityText>Из {props.data.prices[4].origin}</CityText>
        <PriceText>от {props.data.prices[4].price} &#x20BD;</PriceText>
      </Row>
    </BestPrice>
  );
};
