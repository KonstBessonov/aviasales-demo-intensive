import React from "react";
import styled from "styled-components";
import { minWidth } from "../assets";

import twi from "./twi.svg";
import fb from "./fb.svg";
import vk from "./vk.svg";
import rss from "./rss.svg";

const Socials = styled.div`
  text-align: center;
  margin-top: 2rem;
  flex-wrap: nowrap;
  flex: 0 0 auto;
  ${minWidth.xl`
    text-align: left;
    margin-top: 0;
  `};
`;

const Button = styled.button`
  border: none;
  background: url(${props => props.img}) center no-repeat;
  background-size: contain;
  width: 36px;
  height: 36px;
  padding: 0;
  cursor: pointer;
  margin: 0 0.5rem;
`;

export default () => {
  return (
    <Socials>
      <Button img={twi} />
      <Button img={fb} />
      <Button img={vk} />
      <Button img={rss} />
    </Socials>
  );
};
