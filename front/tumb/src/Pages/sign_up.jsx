import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const sign_up = () => {

    return(
      
    <div className='sign_upContainer'>
          <h2>회원가입</h2>
   <div className='Role'>
      <label for = 'role'></label>
      <select id='role' name='role'>
        <option value = ''>선택하세요</option>
        <option value = 'student'>학생</option>
        <option value = 'professor'>교수</option>              
      </select>
    </div>
      <h5>학번, 교번으로 아이디 입력해주세요</h5>
      <div className='userName'>
          <label for = "username">이름:</label>
          <input type = "text" id = "username" name ="username"/>
      </div>
      <div className='userID'>
          <label for = "userID">아이디:</label>
          <input type = "number" id = "userID" name ="userID"/>
      </div>
      <div className='userPW'>
          <label for = "userPW">비밀번호:</label>
          <input type = "password" id = "password" name ="password"/>
      </div>
       <div className='originNum'>
          <label for = "originNum">주민등록번호 앞자리:</label>
          <input type = "number" id = "originNum" name ="originNum"/>
      </div>
      <p>성별:
        <input type="radio" id='male' name='gender' value='male'/>
        <label for ='male'>남</label>
        <input type="radio" id='female' name='gender' value='female'/>
        <label for ='female'>여</label>
      </p>
       <div className='Major'>
      <label for = 'major'></label>
      <select id='major' name='major'>
        <option value = ''>선택하세요</option>
        <option value = 'management'>경영대학</option>
        <option value = 'engineer'>공과대학</option>
        <option value = 'PE'>체육대학</option>
        <option value = 'music'>음악대학</option>              
      </select>
    </div>
    </div>

    );
};

export default sign_up;