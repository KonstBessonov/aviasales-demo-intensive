import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';

import { minWidth } from '../../../../assets';
import planeRight from './plane-r.svg';
import planeLeft from './plane-l.svg';
import segmentPin from './segment-pin.svg';

import Details from './Details';
import { airports, cities } from '../../data';

const formatDate = (date) => {
  if (date) return format(date, 'D MMMM, dd', { locale: ruLocale });
  return undefined;
};

const formatTime = (date) => {
  if (date) return format(date, 'HH:mm', { locale: ruLocale });
  return undefined;
};

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
  background-image: url(${segmentPin});
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  display: none;
  ${minWidth.md`
    display: inline;
  `};
`;

const Segment = ({ icon, data }) => {
  const lastAirport = data.segmentAirports.length - 1;
  return (
    <SegmentWrapper>
      <PlaneIcon src={icon} alt="" />
      <Departure>
        <div>
          <Pin />
          <TimeText>{formatTime(data.departureDate)}</TimeText>
        </div>
        <CityText>{cities[airports[data.segmentAirports[0]].city]}</CityText>
        <DateText>{formatDate(data.departureDate)}</DateText>
      </Departure>
      <Dash />
      <Arrival>
        <TimeText>{formatTime(data.arrivalDate)}</TimeText>
        <CityText>{cities[airports[data.segmentAirports[lastAirport]].city]}</CityText>
        <DateText>{formatDate(data.arrivalDate)}</DateText>
      </Arrival>
      <Details data={data} />
    </SegmentWrapper>
  );
};

Segment.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export const SegmentForward = ({ data }) => <Segment icon={planeRight} data={data} />;

SegmentForward.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const SegmentReturn = ({ data }) => <Segment icon={planeLeft} data={data} />;

SegmentReturn.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
