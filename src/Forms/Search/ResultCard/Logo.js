import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  border: 1px solid #dddddd;
  border-radius: 0.5rem;
  padding 0.5rem;
  flex: 0 0 45%;
`;

export default ({ airline }) => {
  if (Array.isArray(airline)) {
    return (
      <Logo>
        {airline.map((airline, idx) => (
          <ImageContainer>
            <Image key={idx} src={airline} />
          </ImageContainer>
        ))}
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
