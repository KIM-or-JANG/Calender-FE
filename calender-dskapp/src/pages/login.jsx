import React from 'react'
import styled from 'styled-components'
import SocialKakao from '../components/SocialKakao';

const login = () => {

  return (
    <LoginWrapper>
      <SocialKakao />
    </LoginWrapper>
  )
}

export default login

const LoginWrapper = styled.div`
  margin-left : 150px;
`
    