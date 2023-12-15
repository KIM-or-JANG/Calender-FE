import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <h2>Sidebar</h2>

        <div>
            <Link to="/">Home</Link>
        </div>    
        <div>
            <Link to="/about">About</Link>
        </div>

    </SidebarWrapper>
  );
}

export default Sidebar;

const SidebarWrapper = styled.div`
  width: 200px;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;