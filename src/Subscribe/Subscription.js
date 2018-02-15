import React from "react";
import styled from "styled-components";

const Subscription = styled.div`
  text-align: center;
  margin-top: 2rem;
  @media screen and (min-width: 75rem) {
    margin-top: 0;
    margin-left: 2rem;
    text-align: left;
  }
`;

const Form = styled.form`
  display: inline-block;
  width: fit-content;
  border-radius: 2px;
  border: 1px #a0b0b9 solid;
  @media screen and (min-width: 75rem) {
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
