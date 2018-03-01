import React from "react";

import { BlueSection } from "../../assets";
import Logo from "../../UI/Logo";
import Title from "./Title";
import DirectionForm from "../../Forms/DirectionForm";

const Header = BlueSection.extend`
  min-height: 100vh;
  padding-bottom: 2rem;
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <Logo />
        <Title />
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <DirectionForm />
          </div>
        </div>
      </div>
    </Header>
  );
};
