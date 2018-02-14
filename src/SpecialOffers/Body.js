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

const Image = styled.img`
  margin-right: 2rem;
`;

const Price = styled.div`
  text-align: right;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  > span {
    font-size: 2.5rem;
  }
`;
const Days = styled.div`
  text-align: right;
  font-size: 1.5rem;
  color: #d93633;
`;

const Button = styled.a`
  display: block;
  border: 2px solid #cd1f27;
  border-radius: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  color: #cd1f27;
  text-decoration: none;
  text-justify: center;
  padding: 1.2rem;
`;

export default props => {
  return (
    <Body>
      <Details>
        <div>
          <Image src={props.offer.partner} alt="" />
        </div>
        <div>
          <Price>
            от<span> {props.offer.price} ₽</span>
          </Price>
          <Days>Осталось {props.offer.days} дней</Days>
        </div>
      </Details>

      <p>{props.offer.text}</p>
      <Button href="#">
        <center>Узнать подробности</center>
      </Button>
    </Body>
  );
};
