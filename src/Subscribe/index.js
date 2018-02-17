import React from "react";
import styled from "styled-components";
import post from "./post.png";

import { WhiteSection } from "../assets";
import Title from "./Title";
import Socials from "./Socials";
import Subscription from "./Subscription";

const Subscribe = WhiteSection.extend`
  padding: 3rem 0;
  background: url(${post});
  background-repeat-y: no-repeat;
  background-repeat: repeat-x;
  display: none;
  @media screen and (min-width: ${props => props.theme.displaySizes.md}) {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media screen and (min-width: ${props => props.theme.displaySizes.xl}) {
    flex-direction: row;
  }
`;

export default () => {
  return (
    <Subscribe>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-10 col-xl-offset-1">
            <Wrapper>
              <Title />
              <Socials />
              <Subscription />
            </Wrapper>
          </div>
        </div>
      </div>
    </Subscribe>
  );
};
