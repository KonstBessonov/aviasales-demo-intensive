import React from "react";
import styled from "styled-components";

import { BlueSection } from "../../assets";
import Logo from "../../UI/Logo";
import Title from "./Title";
import DirectionForm from "../../Forms/DirectionForm";

const Main = BlueSection.extend`
  min-height: 100vh;
  padding-bottom: 2rem;
`;

const Header = styled.div`
  padding-top: 1rem;
`;

export default () => {
  return (
    <Main>
      <div className="container">
        <Header>
          <Logo />
        </Header>
        <Title />
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <DirectionForm />
          </div>
        </div>
      </div>
    </Main>
  );
};
