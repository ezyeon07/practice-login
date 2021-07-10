import React, { useState } from 'react';
import './App.css';

import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Signup from './pages/Signup';


function App() {
  const [isLogin, setIsLogin] = useState(false);  // 로그인 상태관리
  const [isSignup, setIsSignup] = useState(false);  // 회원가입 상태관리
  const [userData, setUserData] = useState(null); // 

  // 로그인상태 변경 핸들러
  const loginHandler = () => {
    setIsLogin(true)
  }
  // 로그아웃상태 변경 핸들러
  const logoutHandler = () => {
    setIsLogin(false)
  }

  // 로그인 한 후에 유저정보를 변경
  const setUserInfo = (object) => {
    setUserData(object)
  }





  return (
    <div className="App">
      {
        isLogin
        ? <Mypage logoutHandler={logoutHandler} userData={userData} />
        : <Login loginHandler={loginHandler} setUserInfo={setUserInfo}/>
      }
      <Signup />
    </div>
  );
}

export default App;
