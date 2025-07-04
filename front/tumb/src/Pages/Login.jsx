import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


//api 받으면 밑에 POST 주석 풀고 idcheck부분 바꾸고 기존 user 정보 삭제

function Login() { 
    const navigate = useNavigate();

    
    const user = {id: '123',pw: '123',role: 'student'}  //api 연결하고 나면 여기 지우기


    const [inputId, setInputid] = useState('');
    const [inputPw, setInputpw] = useState('');


    // //로그인 Post
    // const handleLogin = async () => {
    //     try{
    //         const userDataCheck = await fetch('주소', {
    //             method: 'post',
    //             headers: {
    //                 'Content-Type' : '주는거 받아적기',
    //             },
    //             body: JSON,stringify({
    //                 id: inputId,
    //                 password: inputPw
    //             }),
    //         });
    //         const userData = await loginResponse.json();

    //         if(userData.success) {
    //             LocalStorage.setItem('token', userData.token);
    //             navigate('/Students/Profile');
    //         } else{
    //             alert('아이디 또는 비밀번호가 틀렸습니다.');
    //         }
    //     }
    // };


    //로그인 함수
    const idcheck = () => {
        if((user.id === inputId) && (user.pw === inputPw)) {
            if(user.role === 'student'){
                alert('로그인 완료');
                navigate('/students/Profile');
            }
            else if(user.role === 'professor'){
                alert('로그인 완료');
                navigate('/Professor/PfProfile');
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
    const handleKeyDown = (e) => {
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
                            onKeyDown={handleKeyDown}
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
                            onKeyDown={handleKeyDown}
                            placeholder="비밀번호를 입력하세요."
                            className="login-input"
                        />
                    </div>

                    <button className="login_button" onClick={idcheck}>로그인</button>  api연결하면 idcheck부분 바꾸기
                    
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