import React, { useState } from 'react';
import styled from 'styled-components';

const AddRoomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <AddRoomChannel onClick={openModal} />
      {isOpen && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>x</CloseButton>
            <p>방 생성 모달</p>
          </ModalContent>
        </ModalWrapper>
      )}
    </div>
  );
};

export default AddRoomModal;

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -999;
`;


const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  max-width: 80%;
`;

const CloseButton = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  pointer-events: auto; 

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
  }
`;

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
