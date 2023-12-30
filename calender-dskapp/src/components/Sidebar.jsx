import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {

  const [room, setRoom] = useState([]);

  const addRooms = () => {
    
  }

  return (
    <SidebarWrapper>
      {/* <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/login">loginPage</Link>
      </NavLinks> */}

      <RoomChannel>
        {room}
      </RoomChannel>

      <AddRoomChannel onClick={addRooms}/>

    </SidebarWrapper>
  );
}

export default Sidebar;

const AddRoomChannel = styled.div`
  position: relative;
  cursor: pointer;
  width: 50px; /* 필요에 따라 크기 조정 */
  height: 50px;
  border-radius: 50%;
  background-color: #fff; /* 버튼의 배경색 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* 선택 사항: 은은한 박스 그림자 추가 */

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    background-color: #000; /* 색상 변경 가능 */
    transform: translate(-50%, -50%);
    transition: background-color 0.3s ease;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &:hover {
    background-color: #333; /* 호버시 배경색 변경 */

    &::before,
    &::after {
      background-color: #fff; /* 호버 시 플러스 표시의 색상 변경 */
    }
  }
`;


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
