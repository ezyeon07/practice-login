import React, { useState } from 'react';
import axios from 'axios';

function Login({loginHandler, setUserInfo}) {



    return (
        <div className="loginContainer">
            <h4>Sign In</h4>
            <div>
                <span>이메일</span>
                <input
                    name="email"
                    type="text"
                />
            </div>
            <div>
                <span>비밀번호</span>
                <input
                    name="password"
                    type="password"
                />
            </div>
            {/* 아이디가 없어서 아래를 누르면 signup 컴포넌트로 이동 */}
            <div>아직 아이디가 없으신가요?</div>
            <div>
                <button>로그인</button>
            </div>
        </div>
    )

}

export default Login;