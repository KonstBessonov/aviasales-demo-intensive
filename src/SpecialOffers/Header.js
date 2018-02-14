import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: #cd2027;
`;

const OfferName = styled.div`
  font-size: 2rem;
  padding: 2.5rem 2rem;
`;

const Image = styled.img`
  margin-right: 2rem;
`;

export default props => {
  return (
    <Header>
      <OfferName>{props.offer.name}</OfferName>
      <Image src={props.offer.img} alt="" />
    </Header>
  );
};
