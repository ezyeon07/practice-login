import React, { useState } from 'react';
import axios from 'axios';

function Mypage() {


    return (
        <div className="mypageContainer">
            <h4>Mypage</h4>
            <div>
                <div>데이터베이스에서 가져온 username</div>
                <div>데이터베이스에서 가져온 email</div>
                <div>데이터베이스에서 가져온 mobile</div>
            </div>
            <div>
                <button>logout</button>
            </div>
            
        </div>
    )

}

export default Mypage;