import React from "react";
import styled from "styled-components";

const Destination = styled.div`
  font-size: 1.5rem;
  border-radius: 1rem;
  color: #5b5b5c;
  padding-bottom: 1.5rem;
  box-shadow: 0px 0.25rem 1.5rem rgba(0, 75, 93, 0.12);
  margin-bottom: 1.5rem;
`;

const Overlay = styled.img`
  width: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 2rem;
`;

const CityText = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const PriceText = styled.div`
  color: #00bae8;
  font-size: 1.75rem;
`;

const CountryText = styled.div`
  color: #a0b0b9;
`;

const DateText = styled.div`
  color: #a0b0b9;
`;

export default props => {
  return (
    <Destination>
      <Overlay src={props.destination.img} />
      <Container>
        <CityText>{props.destination.city}</CityText>
        <PriceText>Найти от {props.destination.price} &#x20BD;</PriceText>
      </Container>
      <Container>
        <CountryText>{props.destination.country}</CountryText>
        <DateText>{props.destination.date}</DateText>
      </Container>
    </Destination>
  );
};
