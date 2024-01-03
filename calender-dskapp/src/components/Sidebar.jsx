import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Sidebar = () => {

  const [room, setRoom] = useState([]);

  const addRooms = () => {
    // console.log('방추가');
  };

  return (
    <SidebarWrapper>

      <RoomChannel>
        {room}
      </RoomChannel>
      <Modal/>

    </SidebarWrapper>
  );
}

export default Sidebar;

const RoomChannel = styled.div`
`;

const SidebarWrapper = styled.div`
  width: 60px;
  background-color: #333;
  color: #fff;
  padding: 20px;
  height: 100%;
  position: fixed; /* 사이드바를 화면에 고정시킵니다. */
  left: 0; /* 왼쪽에 고정시킵니다. */
`;

