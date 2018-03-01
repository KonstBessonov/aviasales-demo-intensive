import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import parse from "date-fns/parse";
import ruLocale from "date-fns/locale/ru";

import { minWidth } from "../../../../assets";
import plane_r from "./plane-r.svg";
import plane_l from "./plane-l.svg";
import segment_pin from "./segment-pin.svg";

import Details from "./Details";

const airportNames = { MOW: "Москва", BCN: "Барселона", CDG: "Шарль-де-Голль" };

const formatDate = date =>
  format(parse(date), "D MMM YYYY, dd", { locale: ruLocale });

const SegmentWrapper = styled.div`
  padding: 0.5rem 0;
  font-size: 1.75rem;
  line-height: 2.5rem;
  display: flex;
  ${minWidth.md`
    justify-content: space-between;
    padding: 1.5rem 1rem;
    &:not(:last-child) {
      border-bottom: 1px dashed #dddddd;
    }
  `};
`;

const PlaneIcon = styled.img`
  padding: 0 1rem;
  ${minWidth.md`
    display: none
  `};
`;

const TimeText = styled.div`
  display: inline;
  color: #4a4a4a;
  ${minWidth.md`
    color: #323333;
    font-size: 3.5rem;
    line-height: 5rem;
  `};
`;
const CityText = styled.div`
  color: #9ca5a8;
  font-weight: 500;
  line-height: 2.5rem;
  display: none;
  ${minWidth.md`
    display: block;
  `};
`;

const DateText = styled.div`
  color: #9ca5a8;
  display: none;
  line-height: 2.5rem;
  ${minWidth.md`
    display: block;
  `};
`;

const Departure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 0 auto;
  order: 1;
`;

const Arrival = Departure.extend`
  order: 3;
  align-items: flex-start;
  flex-grow: 1;
  ${minWidth.md`
    align-items: flex-end;
    flex-grow: 0;
  `};
`;

const Dash = styled(({ className }) => <span className={className}>-</span>)`
  color: #4a4a4a;
  order: 1;
  padding: 0 0.5rem;
  ${minWidth.md`
    display: none;
  `};
`;

const Pin = styled.button`
  padding: 3rem 1.5rem 0 1.5rem;
  background: none;
  background-image: url(${segment_pin});
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  display: none;
  ${minWidth.md`
    display: inline;
  `};
`;

const Segment = ({ icon, data }) => {
  return (
    <SegmentWrapper>
      <PlaneIcon src={icon} alt="" />
      <Departure>
        <div>
          <Pin />
          <TimeText>{data.departure_time}</TimeText>
        </div>
        <CityText>{airportNames[data.segmentAirports[0]]}</CityText>
        <DateText>{formatDate(data.departure_date)}</DateText>
      </Departure>
      <Dash />
      <Arrival>
        <TimeText>{data.arrival_time}</TimeText>
        <CityText>
          {airportNames[data.segmentAirports[data.segmentAirports.length - 1]]}
        </CityText>
        <DateText>{formatDate(data.arrival_date)}</DateText>
      </Arrival>
      <Details data={data} />
    </SegmentWrapper>
  );
};

export const SegmentForward = ({ data }) => {
  return <Segment icon={plane_r} data={data} />;
};

export const SegmentReturn = ({ data }) => {
  return <Segment icon={plane_l} data={data} />;
};
