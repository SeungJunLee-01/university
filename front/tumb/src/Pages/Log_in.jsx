import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Log_in() { 

    const navigate = useNavigate();

    const id = '123';   //초기 아이디 비번 설정 나중에 지울것
    const pw = '123';

    const [inputId, setInputid] = useState('');
    const [inputPw, setInputpw] = useState('');

    const idcheck = () => { //로그인 함수
        console.log("21321");
        if((id === inputId) && (pw === inputPw)) {
            alert('로그인 완료');
            navigate('/students/profile');
        }
        else
            alert('아이디 또는 비밀번호가 틀렸습니다.');
    }

    const sign_up_Link = () => {
        navigate('./sign_up');
    }

    return (
    <div class="loginbox">
        <h1>로그인</h1>
        <input
            type='id'
            value={inputId}
            onChange={(e) => setInputid(e.target.value)}
            placeholder='학번을 입력하세요.'
        />

        <input
            type='pw'
            value={inputPw}
            onChange={(e) => setInputpw(e.target.value)}
            placeholder='비밀번호를 입력하세요.'
        />

        <button className='login_button' onClick={idcheck}>로그인</button>
        <br/>
        
        <button className='sign_up_link' onClick={sign_up_Link}>회원가입</button>
        
    </div>
  );
};

export default Log_in;
