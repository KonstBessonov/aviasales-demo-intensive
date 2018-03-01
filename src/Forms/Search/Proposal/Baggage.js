import React from "react";
import styled from "styled-components";

import handbag from "./handbag.svg";
import baggage from "./baggage.svg";

const Baggage = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
`;

const BadgeContainer = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

const HandbagIcon = () => <img src={handbag} alt="" />;

const HandbagText = styled.span`
  color: #9ab0b9;
  position: absolute;
  left: 0;
  right: 0;
  top: 7px;
  margin-left: auto;
  margin-right: auto;
`;

const BaggageIcon = () => <img src={baggage} alt="" />;

const BaggageText = styled.span`
  color: #9ab0b9;
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  margin-left: auto;
  margin-right: auto;
`;

export const HandbagBadge = ({ params }) => (
  <BadgeContainer>
    <HandbagIcon />
    <HandbagText>{params}</HandbagText>
  </BadgeContainer>
);

export const BaggageBadge = ({ params }) => (
  <BadgeContainer>
    <BaggageIcon />
    <BaggageText>{params}</BaggageText>
  </BadgeContainer>
);

export default ({ handbag, baggage }) => (
  <Baggage>
    <HandbagBadge params={handbag} />
    <BaggageBadge params={baggage} />
  </Baggage>
);
