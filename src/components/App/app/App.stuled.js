import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 30px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  margin-left: 15px;

  &.active {
    color: rgb(237, 28, 84);
  }
`;
