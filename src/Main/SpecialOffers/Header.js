import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #cd2027;
`;

const OfferName = styled.div`
  font-size: 2rem;
  padding: 2.5rem 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Image = styled.img`
  flex: 0 0 auto;
  margin-right: 2rem;
`;

const Header = props => (
  <HeaderStyled>
    <OfferName>{props.offer.name}</OfferName>
    <Image src={props.offer.img} alt="" />
  </HeaderStyled>
);

Header.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }).isRequired,
};

export default Header;
