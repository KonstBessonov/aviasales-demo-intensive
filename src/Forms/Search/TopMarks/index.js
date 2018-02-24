import React from "react";
import styled from "styled-components";
import { minWidth } from "../../../assets";

const TopMark = styled.div`
  font-size: 1.75rem;
  font-weight: 900;
  color: white;
  padding: 1rem;
  margin: 0 -8px;
  ${minWidth.md`
    display: none;
  `};
`;

const Cheapest = TopMark.extend`
  background: #83d40b;
`;

const Fastest = TopMark.extend`
  background: #af7542;
`;

const Best = TopMark.extend`
  background: #c279d1;
`;

export const CheapestMark = () => {
  return (
    <Cheapest>
      Самый дешевый{" "}
      <span role="img" aria-label="Bucks eye">
        🤑
      </span>
    </Cheapest>
  );
};

export const FastestMark = () => {
  return (
    <Fastest>
      Самый быстрый{" "}
      <span role="img" aria-label="Lighting">
        ⚡️
      </span>
    </Fastest>
  );
};

export const BestMark = () => {
  return (
    <Best>
      Самый лучший{" "}
      <span role="img" aria-label="Love eye">
        😍
      </span>
    </Best>
  );
};
