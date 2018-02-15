import React from "react";
import styled from "styled-components";
import post from "./post.png";

import { WhiteSection } from "../assets";
import Title from "./Title";
import Socials from "./Socials";
import Subscription from "./Subscription";

const Subscribe = WhiteSection.extend`
  padding: 3rem 0;
  @media screen and (max-width: 48rem) {
    display: none;
  }
  background: url(${post});
  background-repeat-y: no-repeat;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media screen and (min-width: 75rem) {
    flex-direction: row;
  }
`;

export default () => {
  return (
    <Subscribe>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 col-lg-offset-1">
            <FlexWrapper>
              <Title />
              <Socials />
              <Subscription />
            </FlexWrapper>
          </div>
        </div>
      </div>
    </Subscribe>
  );
};
