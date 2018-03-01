import React from "react";
import styled from "styled-components";
import { minWidth } from "../../assets";

const formatCurrency = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
}).format;

const Destination = styled.div`
  font-size: 1.5rem;
  border-radius: 1rem;
  color: #5b5b5c;
  padding-bottom: 1.5rem;
  box-shadow: 0px 0.25rem 1.5rem rgba(0, 75, 93, 0.12);
  margin-top: 4rem;
  overflow: hidden;
`;

const Overlay = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Flag = styled.img`
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  flex: 0 0 auto;
  height: 30px;
  margin-left: 3rem;
  width: 30px;
  display: none;
  ${minWidth.md`
    display: unset;
  `};
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1 1 auto;
  padding-left: 2rem;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  flex: 1 1 auto;
  padding-right: 2rem;
  ${minWidth.md`
    padding-right: 3rem;
  `};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 2rem;
`;

const CityText = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 4rem;
`;

const PriceText = styled.div`
  color: #00bae8;
  font-size: 2.5rem;
  line-height: 4rem;
`;

const CountryText = styled.div`
  color: #a0b0b9;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

const DateText = styled.div`
  color: #a0b0b9;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

export default props => {
  return (
    <Destination>
      <Overlay src={props.destination.img} />
      <Details>
        <Flag src={props.destination.flag} alt="" />
        <LeftColumn>
          <CityText>{props.destination.city}</CityText>
          <CountryText>{props.destination.country}</CountryText>
        </LeftColumn>
        <RightColumn>
          <PriceText>
            Найти от {formatCurrency(props.destination.price)}
          </PriceText>
          <DateText>{props.destination.date}</DateText>
        </RightColumn>
      </Details>
    </Destination>
  );
};
