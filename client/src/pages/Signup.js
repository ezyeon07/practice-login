import React, { useState } from 'react';
import axios from 'axios';

function Signup() {


    return (
        <div className="signupContainer">
            <h4>Sign Up</h4>
            <div>모든 항목은 필수입니다</div>
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
            <div>
                <span>이름</span>
                <input
                    name="username"
                    type="text"
                />
            </div>
            <div>
                <span>전화번호</span>
                <input
                    name="mobile"
                    type="text"
                />
            </div>
            {/* 이미 아이디가 있어서 아래를 누르면 login 컴포넌트로 이동 */}
            <div>이미 아이디가 있으신가요?</div>
            <div>
                <button>회원가입</button>
            </div>
        </div>
    )

}

export default Signup;