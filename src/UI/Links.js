import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  color: #5B5B5C;
  padding-top: 1rem;
  transition: color 0.3s;
  &:hover {
    color: ${props => props.theme.hover};
  }
  }
`;

export const LinkBold = LinkStyled.extend`
  padding-top: 1.5rem;
  font-weight: 500;
`;
