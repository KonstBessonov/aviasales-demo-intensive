import React from "react";
import styled from "styled-components";
import pluralize from "pluralize-ru";

import { minWidth } from "../../../assets";
import { partners } from "../data";

import Logo from "./Logo.js";
import { SegmentForward, SegmentReturn } from "./Segment";
import Badges from "./Badges";
import { BaggageSection, BaggageData } from "./Baggage";
import { Buy, Opener } from "./UI";
import OtherOffers from "./OtherOffers";

import copy_link from "./copy-link.svg";

import FormattedCurrency from "../../../UI/FormattedCurrency";

const pluralizeTickets = qty =>
  pluralize(qty, "%d билетов", "%d билет", "%d билета", "%d билетов");

const Proposal = styled.div`
  background-color: #ffffff;
  margin-bottom: 1rem;
  margin-left: -8px;
  margin-right: -8px;
  ${minWidth.md`
    margin-left: 0;
    margin-right: 0;
    border-radius: 0.5rem;
  `};
`;

const Container = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  text-align: center;
  flex: 0 0 25%;
  display: none;
  ${minWidth.md`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: solid 1px #dddddd;
  `};
`;

const LastTickets = styled.div`
  font-size: 1.5rem;
  color: #ff654e;
  line-height: 2.25rem;
`;

const BuySection = styled.div`
  padding: 0 3rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RightColumn = styled.div`
  padding: 1rem;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const PriceCarrier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  ${minWidth.md`
    justify-content: flex-start;
    padding: 1rem 1rem 0 1rem;
  `};
`;

const InlinePrice = styled.span`
  font-size: 2.75rem;
  font-weight: bold;
  color: #ff9241;
  border: none;
  text-align: center;
  background: none;
  ${minWidth.md`
    display: none;
  `};
`;

const Partner = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #a0b0b9;
`;

const CopyLink = styled.button`
  padding: 1.5rem;
  border: none;
  background: none;
  background-position-x: center;
  background-repeat: no-repeat;
  background-image: url(${copy_link});
  display: none;
  ${minWidth.md`
    display: initial;
  `};
`;

export default ({ result }) => {
  return (
    <Proposal>
      <Container>
        <LeftColumn>
          <BaggageSection compact={result.baggage.length === 1}>
            {result.baggage.map((data, idx) => (
              <BaggageData
                key={idx}
                data={data}
                compact={result.baggage.length === 1}
              />
            ))}
          </BaggageSection>
          <BuySection>
            {result.ticketsRemain && (
              <LastTickets>
                Осталось {pluralizeTickets(result.ticketsRemain)}
              </LastTickets>
            )}
            <Buy>
              Купить за <FormattedCurrency value={result.prices[0].price} />
            </Buy>
            <Partner>на {partners[result.prices[0].partnerId]}</Partner>
            {result.prices.length > 1 && (
              <OtherOffers prices={result.prices.slice(1)} />
            )}
          </BuySection>
        </LeftColumn>

        <RightColumn>
          <PriceCarrier>
            <InlinePrice>
              <FormattedCurrency value={result.prices[0].price} />
            </InlinePrice>
            <Logo airline={result.airline} />
            <Badges badges={result.badges} />
            <CopyLink />
          </PriceCarrier>
          <SegmentForward data={result.segments[0]} />
          <SegmentReturn data={result.segments[1]} />
        </RightColumn>
        <Opener />
      </Container>
    </Proposal>
  );
};
