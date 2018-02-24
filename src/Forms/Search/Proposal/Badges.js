import React from "react";
import styled from "styled-components";
import { minWidth } from "../../../assets";

const Badges = styled.div`
  justify-content: flex-end;
  flex-grow: 1;
  padding: 0 1.5rem;
  font-size: 1.25rem;
  line-height: 2rem;
  color: #2196f3;
  display: none;
  ${minWidth.md`
    display: flex;
  `};
`;

const Badge = styled.span`
  border: 1px solid #2196f3;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
`;

export default ({ badges }) => (
  <Badges>{badges.isCharter === true && <Badge>ЧАРТЕР</Badge>}</Badges>
);
