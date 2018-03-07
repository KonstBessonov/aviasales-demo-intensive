import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { minWidth } from '../../../../assets';
import FormattedDuration from '../../../../UI/FormattedDuration';
import clock from './clock.svg';
import stopPoint from './stop-point.svg';
import planeTakeoff from './plane-takeoff.svg';

const getStopsText = (airports) => {
  if (airports.length === 2) {
    return 'Прямой';
  }
  return airports.slice(1, -1).join();
};

const DetailsStyled = styled.div`
  display: flex;
  order: 4;
  flex-grow: 1;
  flex-basis: 50%;
  ${minWidth.md`
    flex-direction: column;
    order: 2;
    padding: 0 3rem;
    flex-basis: auto;
  `};
`;

const ClockIcon = styled.img`
  padding: 0 1rem 0 0;
  ${minWidth.md`
    display: none;
  `};
`;

const PlaneTakeoff = styled(({ className }) => (
  <img className={className} src={planeTakeoff} alt="" />
))`
  width: 16px;
  height: 16px;
  display: none;
  ${minWidth.md`
    display: initial;
  `};
`;

const PlaneLanding = PlaneTakeoff.extend`
  transform: rotate(45deg);
`;

const DurationPrefix = styled(({ className, children }) => (
  <span className={className}>{children}</span>
))`
  display: none;
  ${minWidth.md`
    display: initial;
  `};
`;

const Duration = styled(({ className, duration }) => (
  <div className={className}>
    <PlaneTakeoff />
    <ClockIcon src={clock} alt="" />
    <span>
      <DurationPrefix>Всего: </DurationPrefix>
      <FormattedDuration duration={duration} />
    </span>
    <PlaneLanding />
  </div>
))`
  display: flex;
  justify-content: space-between;
  ${minWidth.md`
    color: #A0B0B9;
    font-size: 1.5rem;
    line-height: 3rem;
  `};
`;

const Stops = styled.div`
  color: #4a4a4a;
  flex-grow: 1;
  text-align: right;
  ${minWidth.md`
    display: none;
  `};
`;

const StopPoint = styled(({ className }) => <img src={stopPoint} className={className} alt="" />)`
  width: 11px;
  height: 11px;
`;

const FlightLine = styled.div`
  flex-grow: 1;
  border-top: 1px solid #a0b0b9;
  margin: 0.25rem;
`;

const StopsLine = styled(({ className, airports }) => (
  <div className={className}>
    <StopPoint />
    <FlightLine />
    {airports.slice(1, -1).map(airport => (
      <Fragment key={airport}>
        <StopPoint />
        <FlightLine />
      </Fragment>
    ))}
    <StopPoint />
  </div>
))`
  display: none;
  ${minWidth.md`
    display: flex;
    align-items: center;
  `};
`;

const SegmentAirports = styled(({ className, airports }) => (
  <div className={className}>{airports.map(airport => <span key={airport}>{airport}</span>)}</div>
))`
  color: #4a4a4a;
  font-size: 1.25rem;
  display: none;
  ${minWidth.md`
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
  `};
`;

const Details = ({ data }) => (
  <DetailsStyled>
    <Duration duration={data.duration} />
    <Stops>{getStopsText(data.segmentAirports)}</Stops>
    <StopsLine airports={data.segmentAirports} />
    <SegmentAirports airports={data.segmentAirports} />
  </DetailsStyled>
);

Details.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Details;
