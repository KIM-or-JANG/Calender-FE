import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/login">loginPage</Link>
      </NavLinks>

    </SidebarWrapper>
  );
}

export default Sidebar;

const SidebarWrapper = styled.div`
  width: 100px;
  background-color: #333;
  color: #fff;
  padding: 20px;
  height: 100%;
  position: fixed; /* 사이드바를 화면에 고정시킵니다. */
  left: 0; /* 왼쪽에 고정시킵니다. */
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: #fff;
    margin-bottom: 10px;
  }
`;
