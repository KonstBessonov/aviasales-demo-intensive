import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoStyled = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 36px;
  width: 99px;
`;

const ImageSmall = styled.img`
  border: 1px solid #dddddd;
  border-radius: 0.5rem;
  padding 0.5rem;
  height: 36px;
  width: 36px;
  &:not(:first-child){
    margin-left: 1.5rem 
  }
`;

const Logo = ({ carriers }) => {
  if (Array.isArray(carriers)) {
    return (
      <LogoStyled>{carriers.map(carrier => <ImageSmall key={carrier} src={carrier} />)}</LogoStyled>
    );
  }
  return (
    <LogoStyled>
      <Image src={carriers} />
    </LogoStyled>
  );
};

Logo.propTypes = {
  carriers: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};

export default Logo;
