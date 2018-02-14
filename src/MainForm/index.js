import React from "react";
import styled from "styled-components";
import aero from "./aero.svg";

import { BlueSection } from "../assets";
import Logo from "./Logo";
import Title from "./Title";
import DirectionForm from "./DirectionForm";

const Header = BlueSection.extend`
  height: 100vh;
`;

const SubmitButton = styled.button`
  border-radius: 0.5rem;
  background: #ff9241;
  border: none;
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <Logo />
        <Title />
        <DirectionForm />
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <SubmitButton>
              Найти билеты <img src={aero} alt="aero" />
            </SubmitButton>
          </div>
        </div>
      </div>
    </Header>
  );
};
