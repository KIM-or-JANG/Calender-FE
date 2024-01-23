import React from 'react'
      
const SocialKakao = ()=>
{
    const Rest_api_key='58fc709768dcd1b5dc6a4f72874b6e2b' //REST API KEY
    const redirect_uri = 'https://kim-or-jang.shop/api/user/kakao/callback' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
        <img src='../assets/socailLogin/kakao_login_medium_narrow.png' alt='카카오 로그인' onClick={handleLogin} />
    </>
    )
}
export default SocialKakao
