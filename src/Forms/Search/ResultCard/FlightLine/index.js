import React from "react";
import styled from "styled-components";
import plane_r from "./plane-r.svg";
import plane_l from "./plane-l.svg";
import clock from "./clock.svg";

const FlightLine = styled.div`
  padding: 0.5rem 0;
  font-size: 1.75rem;
`;

const getTransferText = transfers => {
  if (transfers === 0) {
    return "Прямой";
  } else {
    return transfers;
  }
};

const PlaneIcon = styled.img`
  padding: 0 1rem 0 0;
`;

const ClockIcon = styled.img`
  padding: 0 1rem 0 0;
`;

const Transfers = styled.div`
  text-align: right;
`;

const Flight = ({ icon, data }) => {
  return (
    <FlightLine>
      <div className="container">
        <div className="row">
          <div className="col-xs-5">
            <PlaneIcon src={icon} alt="" />
            {data.departure} - {data.arrival}
          </div>
          <div className="col-xs">
            <ClockIcon src={clock} alt="" />
            {data.duration}
          </div>
          <div className="col-xs">
            <Transfers>{getTransferText(data.transfers)}</Transfers>
          </div>
        </div>
      </div>
    </FlightLine>
  );
};

export const FlightForward = ({ data }) => {
  return <Flight icon={plane_r} data={data} />;
};

export const FlightReturn = ({ data }) => {
  return <Flight icon={plane_l} data={data} />;
};
