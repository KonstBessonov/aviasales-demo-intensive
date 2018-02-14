import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

const Image = styled.img`
  margin-right: 1.5rem;
  width: 3.5rem;
  border-radius: 50%;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0 1rem rgba(38, 38, 38, 0.1);
`;

const City = styled.div`
  font-size: 2.75rem;
  font-weight: bold;
`;

const Country = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #a0b0b9;
`;

export default props => {
  return (
    <Header>
      <div>
        <Image src={props.destination.flag} alt="" />
      </div>
      <div>
        <City>{props.destination.city}</City>
        <Country>{props.destination.country}</Country>
      </div>
    </Header>
  );
};
