import React from "react";
import styled from "styled-components";

import Logo from "./Logo.js";
import { FlightForward, FlightReturn } from "./FlightLine";

const ResultCard = styled.div`
  background-color: #ffffff;
  margin-bottom: 1rem;
  padding: 1rem 0;
`;

const Price = styled.span`
  font-size: 2.75rem;
  font-weight: bold;
  color: #ff9241;
`;

export default ({ result }) => {
  return (
    <ResultCard>
      <div className="container">
        <div className="row space-between-xs middle-xs">
          <div className="col-xs">
            <Price>{result.price} р.</Price>
          </div>
          <div className="col-xs-5">
            <Logo airline={result.airline} />
          </div>
        </div>
      </div>
      <FlightForward data={result.forward} />
      <FlightReturn data={result.reverse} />
    </ResultCard>
  );
};
