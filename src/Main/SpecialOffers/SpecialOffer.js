import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Body from "./Body";

const SpecialOffer = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  background: #ffffff;
`;

export default props => {
  return (
    <SpecialOffer>
      <Header offer={props.offer} />
      <Body offer={props.offer} />
    </SpecialOffer>
  );
};
