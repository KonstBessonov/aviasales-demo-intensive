import React from "react";
import styled from "styled-components";
import { minWidth } from "../../../assets";

const marks = {
  cheapest: { background: "#83d40b", text: "Самый дешевый", emoji: "🤑" },
  fastest: { background: "#af7542", text: "Самый быстрый", emoji: "️⚡️" },
  best: { background: "#c279d1", text: "Лучший билет", emoji: "😍" }
};

const TopMark = styled.div`
  font-size: 1.75rem;
  font-weight: 900;
  color: white;
  padding: 1rem;
  margin: 0 -8px;
  background: ${({ mark }) => marks[mark].background};
  ${minWidth.md`
    display: none;
  `};
`;

export default ({ mark }) => (
  <TopMark mark={mark}>
    {marks[mark].text} <span>{marks[mark].emoji}</span>
  </TopMark>
);
