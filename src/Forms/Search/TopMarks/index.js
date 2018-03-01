import React from "react";
import styled from "styled-components";
import { minWidth } from "../../../assets";

const marks = {
  cheapest: { background: "#83d40b", text: "Самый дешевый", emoji: "🤑" },
  fastest: { background: "#af7542", text: "Самый быстрый", emoji: "️⚡️" },
  best: { background: "#c279d1", text: "Лучший билет", emoji: "😍" }
};

export const TopMark = styled(({ className, mark }) => (
  <div className={className}>
    {marks[mark].text} <span>{marks[mark].emoji}</span>
  </div>
))`
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
