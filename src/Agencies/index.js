import React from "react";

import { WhiteSection, displaySize } from "../assets";
import Title from "./Title";
import Slider from "./Slider";

const Agencies = WhiteSection.extend`
  padding: 3rem 0;
  @media screen and (max-width: ${displaySize.md}) {
    display: none;
  }
`;

export default () => {
  return (
    <Agencies>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xl-10 col-xl-offset-1">
            <Title />
            <Slider />
          </div>
        </div>
      </div>
    </Agencies>
  );
};
