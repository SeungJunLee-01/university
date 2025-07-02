import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Log_in() { 

    const navigate = useNavigate();

    const id = '123';
    const pw = '123';

    const [inputId, setInputid] = useState('');
    const [inputPw, setInputpw] = useState('');

    const idcheck = () => { //로그인 함수
        if(id === inputId && pw === inputPw) {
            alert('로그인 완료');
          //  navigate = useNavigate('/sign_up'); //sign_up은 임시
        }
        else
            alert('아이디 또는 비밀번호가 틀렸습니다.');
    }

    return (
    <div class="loginbox">
        <h1>로그인</h1>
        <input
            type='text'
            value={inputId}
            onChange={(e) => setInputid(e.target.value)}
            placeholder='학번을 입력하세요.'
        />

        <input
            type='text'
            value={inputPw}
            onChange={(e) => setInputpw(e.target.value)}
            placeholder='비밀번호를 입력하세요.'
        />

        <button className='login_button' onclick={idcheck}>로그인</button>
        
    </div>
  );
};

export default Log_in;
