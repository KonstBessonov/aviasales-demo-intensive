import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  display: flex;
`;
/* align-items: center; */

const Image = styled.img`
  height: 36px;
  width: 99px;
`;

const ImageSmall = styled.img`
  border: 1px solid #dddddd;
  border-radius: 0.5rem;
  padding 0.5rem;
  height: 36px;
  width: 36px;
  &:not(:first-child){
    margin-left: 1.5rem 
  }
`;

export default ({ airline }) => {
  if (Array.isArray(airline)) {
    return (
      <Logo>
        {airline.map((airline, idx) => <ImageSmall key={idx} src={airline} />)}
      </Logo>
    );
  } else {
    return (
      <Logo>
        <Image src={airline} />
      </Logo>
    );
  }
};
