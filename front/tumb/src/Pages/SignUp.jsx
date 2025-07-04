import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: '',
    username: '',
    userID: '',
    password: '',
    originNum: '',
    gender: '',
    major: ''
  });

  // 입력값 업데이트 함수
  const handleChange = (e) => {
    const { name, value } = e.target;

  // 숫자만 입력 받도록 - gpt는 신이여.
    if (name === 'userID' || name === 'originNum') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // 유효성 검사 함수 - gpt최고..
  const checkForm = () => {
    const { role, username, userID, password, originNum, gender, major } = formData;

    if (!role || !username || !userID || !password || !originNum || !gender || !major) {
      alert('모든 항목을 입력해주세요.');
      return false;
    }

    if (userID.length !== 7) {
      alert('아이디는 7자리여야 합니다!');
      return false;
    }

    if (originNum.length !== 6) {
      alert('주민등록번호 앞자리는 6자리여야 합니다.');
      return false;
    }

    if (password.length < 8 || password.length > 16) {
      alert('비밀번호는 8~16자리여야 합니다.');
      return false;
    }

    return true;
  };

  //학생 데이터, 교수 데이터 role따라 다르게 받기 - gpt 최고..
  const handleConfirm = () => {
  if (!checkForm()) return;
  if (formData.role === 'student') {
    console.log('📘 학생 등록 데이터:', formData);
    // fetch('https://your-api.com/register/student', {...})  // 실제 서버 전송 시 엔드포인트 연결
  } else if (formData.role === 'professor') {
    // 교수 등록 처리
    console.log('📗 교수 등록 데이터:', formData);
    // fetch('https://your-api.com/register/professor', {...})  // 실제 서버 전송 시 엔드포인트 연결
  }
  alert('회원가입이 완료되었습니다!');
  navigate('/');
};


  return (
    <div className='sign_upContainer'>
      <div className='form-box'>
        <h2>회원가입</h2>

        <div className='Role'>
          <label htmlFor='role'>[학생 , 교수] 선택해주세요</label>
          <select id='role' name='role' value={formData.role} onChange={handleChange}>
            <option value=''>선택하세요</option>
            <option value='student'>학생</option>
            <option value='professor'>교수</option>
          </select>
        </div>

        <div className='user-info-group'>
          <div>
            <label htmlFor='username'>이름</label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='userID'>아이디(학생은 학번, 교사는 교번 사용해주세요)</label>
            <input
              type='text'
              id='userID'
              name='userID'
              maxLength={7}
              value={formData.userID}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='password'>비밀번호</label>
            <input
              type='password'
              id='password'
              name='password'
              minLength={8}
              maxLength={16}
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='originNum'>주민등록번호 앞자리</label>
            <input
              type='text'
              id='originNum'
              name='originNum'
              maxLength={6}
              value={formData.originNum}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='gender-group'>
          <label htmlFor='male'>남</label>
          <input
            type='radio'
            id='male'
            name='gender'
            value='male'
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          <label htmlFor='female'>여</label>
          <input
            type='radio'
            id='female'
            name='gender'
            value='female'
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
        </div>

        <div className='Major'>
          <label htmlFor='major'>전공</label>
          <select id='major' name='major' value={formData.major} onChange={handleChange}>
            <option value=''>선택하세요</option>
            <option value='management'>경영대학</option>
            <option value='engineer'>공과대학</option>
            <option value='PE'>체육대학</option>
            <option value='music'>음악대학</option>
          </select>
        </div>

        <button className='confirm-button' onClick={handleConfirm}>완료</button>
      </div>
    </div>
  );
};

export default SignUp;
