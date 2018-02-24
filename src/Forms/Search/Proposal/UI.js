import styled from "styled-components";
import opener from "./opener.svg";
import { minWidth } from "../../../assets";

export const Price = styled.button`
  font-size: 2.75rem;
  font-weight: bold;
  color: #ff9241;
  border: none;
  text-align: center;
  background: none;
  ${minWidth.md`
    font-size: 2rem;
    font-weight: 500;
    background-color: #ff9241;
    color: white;
    cursor: pointer;
    padding: 1rem 3rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
  `};
`;

export const Opener = styled.button`
  border: none;
  background: #edf5f7 center no-repeat;
  background-image: url(${opener});
  padding: 1.25rem;
  display: none;
  ${minWidth.md`
    display: initial;
  `};
`;
