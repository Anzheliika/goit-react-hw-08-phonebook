import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
  text-align: center;
  margin-top: 160px;
`;

export const HomeTitle = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
`;

export const HomeLinks = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const HomeItems = styled.li`
  margin-right: 30px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #d6e5f1;
  padding: 12px;
  background-color: #3a668a;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  transition: background-color 0.3s linear, color 0.3s linear;

  &:hover{
  background-color: #D6E5F1;
  color: #3a668a
`;
