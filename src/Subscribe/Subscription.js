import React from "react";
import styled from "styled-components";
import { displaySize } from "../assets";

const Subscription = styled.div`
  justify-content: center;
  margin-top: 2rem;
  display: flex;
  flex-wrap: nowrap;
  flex: 0 1 auto;
  @media screen and (min-width: ${displaySize.xl}) {
    margin-top: 0;
    margin-left: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  border-radius: 2px;
  border: 1px #a0b0b9 solid;
  @media screen and (min-width: ${displaySize.xl}) {
    text-align: left;
  }
`;

const Email = styled.input`
  color: inherit;
  padding: 1rem 2rem;
  margin: 0;
  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const Submit = styled.button`
  border: none;
  background: #ff8e41;
  padding: 1rem 2.25rem;
  color: #ffffff;
  cursor: pointer;
`;

export default () => {
  return (
    <Subscription>
      <Form>
        <Email type="email" placeholder="Ваш email" />
        <Submit>Подписаться</Submit>
      </Form>
    </Subscription>
  );
};
