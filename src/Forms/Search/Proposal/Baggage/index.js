import React from "react";
import styled, { css } from "styled-components";

import handbag from "./handbag.svg";
import baggage from "./baggage.svg";
import no_baggage from "./no-baggage.svg";
import no_baggage_red from "./no-baggage-red.svg";

import FormattedCurrency from "../../../../UI/FormattedCurrency";

const Baggage = styled.div`
  flex: 0 0 50%;
  margin: 0;
  padding: 1rem 0;
  ${({ selected }) =>
    !selected &&
    css`
      background-color: #f8fbfb;
      border-bottom: 1px solid #dddddd;
      border-left: 1px solid #dddddd;
      &:first-child {
        border-left: none;
        border-right: 1px solid #dddddd;
      }
    `};
`;

const Badges = styled.div`
  display: flex;
  justify-content: center;
`;

const NoBaggage = styled.span`
  font-size: 1.25rem;
  color: ${({ active }) => (active ? `#DADADA` : `#9AB0B9`)};
`;

const ExtraCost = styled.span`
  font-size: 1.25rem;
  color: #66d295;
`;

const BadgeContainer = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  opacity: ${({ dimmed }) => (dimmed ? 0.4 : 1)};
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

const BaggageIcon = ({ weight, selected }) => (
  <img src={weight ? baggage : selected ? no_baggage_red : no_baggage} alt="" />
);

const BaggageText = styled.span`
  color: #9ab0b9;
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  margin-left: auto;
  margin-right: auto;
`;

const HandbagBadge = ({ weight }) => (
  <BadgeContainer dimmed={!weight}>
    <HandbagIcon />
    <HandbagText>{weight || "?"}</HandbagText>
  </BadgeContainer>
);

const BaggageBadge = ({ weight, selected }) => (
  <BadgeContainer>
    <BaggageIcon weight={weight} selected={selected} />
    {!weight || <BaggageText>{weight}</BaggageText>}
  </BadgeContainer>
);

export const BaggageSection = styled.div`
  display: flex;
  justify-content: center;
  ${({ compact }) => compact || `margin-bottom: 1rem;`};
`;

export const BaggageData = ({ data, compact }) => (
  <Baggage selected={data.selected}>
    <Badges>
      <HandbagBadge weight={data.handbag} selected={data.selected} />
      <BaggageBadge weight={data.baggage} selected={data.selected} />
    </Badges>
    {compact ||
      !data.extraCost || (
        <ExtraCost>
          - <FormattedCurrency value={data.extraCost} />
        </ExtraCost>
      )}
    {compact || !!data.baggage || <NoBaggage>Нет багажа</NoBaggage>}
  </Baggage>
);
