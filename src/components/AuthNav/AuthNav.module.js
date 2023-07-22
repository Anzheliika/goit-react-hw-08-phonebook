import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  transition: color 0.3s linear;

  &.active {
    color: #d5e6f4;
  }

  &:hover {
    color: #d5e6f4;
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
