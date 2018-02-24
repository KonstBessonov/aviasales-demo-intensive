import React from "react";
import styled from "styled-components";
import copy_link from "./copy-link.svg";

import Logo from "./Logo.js";
import { SegmentForward, SegmentReturn } from "./Segment";
import Badges from "./Badges";
import { Price, Opener } from "./UI";
import { minWidth } from "../../../assets";

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
  padding: 1rem 3rem;
  ${minWidth.md`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: solid 1px #dddddd;
  `};
`;

const RightColumn = styled.div`
  padding: 1rem 2rem;
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
  padding: 0 1rem;
  ${minWidth.md`
    justify-content: flex-start;

  `};
`;

const InlinePrice = Price.extend`
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
          <div>Baggage</div>
          <Price>Купить за {result.price.toLocaleString()} ₽</Price>
          <Partner>на {result.partner}</Partner>
        </LeftColumn>

        <RightColumn>
          <PriceCarrier>
            <InlinePrice>{result.price.toLocaleString()} ₽</InlinePrice>
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
