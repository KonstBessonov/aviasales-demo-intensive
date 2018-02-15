import React from "react";
import styled from "styled-components";
import { BlueSection } from "../assets";

import SpecialOffer from "./SpecialOffer";
import { specialOffers } from "./data";

const SpecialOffers = BlueSection.extend`
  padding-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  padding: 2rem 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

const Link = styled.a`
  color: inherit;
  transition: color 0.3s;
  &:hover {
    color: #fd8a27;
  }
`;

const StarNote = styled.div`
  margin-top: 1rem;
`;

export default () => {
  return (
    <SpecialOffers>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xl col-xl-offset-1">
            <Title>Спецпредложения на авиабилеты</Title>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-xl-10 col-xl-offset-1">
            <div className="row between-xl">
              <div className="col-xs-12 col-md-4 col-xl-4">
                <SpecialOffer offer={specialOffers[0]} />
              </div>
              <div className="col-xs-12 col-md-4 col-xl-4">
                <SpecialOffer offer={specialOffers[1]} />
              </div>
              <div className="col-xs-12 col-md-4 col-xl-4">
                <SpecialOffer offer={specialOffers[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer>
        <Link href="#">Смотреть все спецпредложения</Link>
        <StarNote>
          <sup>*</sup>средняя цена по направлению
        </StarNote>
      </Footer>
    </SpecialOffers>
  );
};
