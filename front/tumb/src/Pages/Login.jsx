import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() { 
    const navigate = useNavigate();

    
    const user = {id: '123',pw: '123',role: 'student'}


    const [inputId, setInputid] = useState('');
    const [inputPw, setInputpw] = useState('');


    const idcheck = () => { //로그인 함수
        if((user.id === inputId) && (user.pw === inputPw)) {
            if(user.role == 'student'){
                alert('로그인 완료');
                navigate('/students/Profile');
            }
            else if(user.role == 'professor'){
                alert('로그인 완료');
                navigate('/professor/pfProfile');
            }
            else{
                alert('로그인 실패');
                alert('role error')
            }
        }
        else
            alert('아이디 또는 비밀번호가 틀렸습니다.');
    }

    //로그인 성공시 프로필로 넘기기, 추후 교수 페이지로 넘어가는 것도 할 것
    const SignUp_Link = () => {
        navigate('./SignUp');
    }

    // Enter 키 처리 함수 추가
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            idcheck();
        }
    }

    return (
        <div className="login-container">
            <div className="loginbox">
                <div className="login-header">
                    <h1>대학교 포털 시스템</h1>
                </div>
                
                <div className="login-form">
                    <div className="input-group">
                        <i className="icon-user"></i>
                        <input
                            type="text"
                            value={inputId}
                            onChange={(e) => setInputid(e.target.value)}
                            placeholder="학번 또는 교번을 입력하세요."
                            className="login-input"
                        />
                    </div>

                    <div className="input-group">
                        <i className="icon-lock"></i>
                        <input
                            type="password"
                            value={inputPw}
                            onChange={(e) => setInputpw(e.target.value)}
                            placeholder="비밀번호를 입력하세요."
                            className="login-input"
                        />
                    </div>

                    <button className="login_button" onClick={idcheck}>로그인</button>
                    
                    <div className="divider">
                        <span>또는</span>
                    </div>
                    
                    <button className="sign_up_link" onClick={SignUp_Link}>회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Login;