import React from "react";
import styled from "styled-components";

const Body = styled.div`
  color: #242424;
  background: #ffffff;
  padding: 1rem;
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
  line-height: 2.5rem;
  min-height: 12rem;
`;

const Link = styled.a`
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

export default props => {
  return (
    <Body>
      <Details>
        <ImageWrapper>
          <Image src={props.offer.partner} alt="" />
        </ImageWrapper>
        <PriceDayWrapper>
          <Price>
            от<PriceSpan> {props.offer.price} ₽</PriceSpan>
          </Price>
          <Days>Осталось {props.offer.days} дней</Days>
        </PriceDayWrapper>
      </Details>

      <OfferText>{props.offer.text}</OfferText>
      <Link href="#">Узнать подробности</Link>
    </Body>
  );
};
