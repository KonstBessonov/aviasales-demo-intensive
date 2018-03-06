import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  text-align: left;
`;

const Image = styled.img`
  margin-right: 1.5rem;
  width: 3.5rem;
  border-radius: 50%;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0 1rem rgba(38, 38, 38, 0.1);
`;

const City = styled.div`
  font-size: 2.75rem;
  font-weight: bold;
  line-height: 4rem;
`;

const Country = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #a0b0b9;
  line-height: 2.5rem;
`;

const Header = ({ destination: { flag, city, country } }) => (
  <HeaderStyled>
    <div>
      <Image src={flag} alt="" />
    </div>
    <div>
      <City>{city}</City>
      <Country>{country}</Country>
    </div>
  </HeaderStyled>
);

Header.propTypes = {
  destination: PropTypes.shape({
    flag: PropTypes.element.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
