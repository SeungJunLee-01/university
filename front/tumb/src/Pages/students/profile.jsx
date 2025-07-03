import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();

    const app_link = () => {
        navigate('/students/Application');
    }
    const result_link = () => {
        navigate('/Students/Result');
    }


    //학생 정보
    const [stuNum, setStuNum] = useState(566);
    const [stuName, setStuName] = useState('Lee');
    const [stuPer, setStuPer] = useState('111111');   //주민번호
    const [stuGen, setStuGen] = useState('남');
    const [stuAff, ] = useState('컴공');    //소속학과
    const [stuGrade, ] = useState(3);
    const [stuState, ] = useState('재학');  //학적상태


    //학생 프로필 GET함수
    const stuProfile = async () => {
        try{
            const stuData = await fetch('주소 받아쓰기', {
                methode: "GET",
                headers: {
                    "Content-Type" : "링크",
                },
            });
            const stuResult = await stuData.json();

            if(stuData.status === 200) {
                console.log(stuResult);
                setStuNum(stuResult.num); //수정할것
                //다른 페이지에서 학생 정보 쓸 수 있도록 로컬에 저장
                const studentInfo = {
                    stu_num: stuResult.num,
                    stu_name: stuResult.name,
                    stu_personalNum: stuResult.personalNum,
                    stu_gender: stuResult.gender,
                    stu_affiliation: stuResult.affiliation,
                    stu_grade: stuResult.grade,
                    stu_state: stuResult.state
                };
                localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
                
            } else{
                alert('프로필을 가져오지 못했습니다.');
            }
        }
        catch(error) {
            console.error(error);
        }
    };


    // 학적 상태에 따른 클래스명 결정
    const getStatusClass = (status) => {
        switch (status) {
            case '재학': return 'status-active';
            case '휴학': return 'status-leave';
            case '자퇴': return 'status-quit';
            default: return '';
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <div className="profile-header">
                    <h1>학생 정보</h1>
                    <p>Student Information</p>
                </div>

                <div className="profile-card">
                    <div className="profile-top">
                        <div className="profile-avatar">
                            <div className="avatar-placeholder">
                                <span>👤</span>
                            </div>
                            <h2>{stuName}</h2>
                            <p className="student-number">{stuNum}</p>
                        </div>

                        <div className={`status-badge ${getStatusClass(stuState)}`}>
                            {stuState}
                        </div>
                    </div>

                    <div className="profile-info">
                        <div className="info-section">
                            <h3>기본 정보</h3>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-icon">📋</span>
                                    <div className="info-content">
                                        <span className="info-label">학번</span>
                                        <span className="info-value">{stuNum}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">👤</span>
                                    <div className="info-content">
                                        <span className="info-label">이름</span>
                                        <span className="info-value">{stuName}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">🆔</span>
                                    <div className="info-content">
                                        <span className="info-label">주민번호</span>
                                        <span className="info-value">{stuPer}-*******</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">⚧</span>
                                    <div className="info-content">
                                        <span className="info-label">성별</span>
                                        <span className="info-value">{stuGen}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3>학적 정보</h3>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-icon">🏫</span>
                                    <div className="info-content">
                                        <span className="info-label">소속학과</span>
                                        <span className="info-value">{stuAff}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">📚</span>
                                    <div className="info-content">
                                        <span className="info-label">학년</span>
                                        <span className="info-value">{stuGrade}학년</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">✅</span>
                                    <div className="info-content">
                                        <span className="info-label">학적상태</span>
                                        <span className={`info-value ${getStatusClass(stuState)}`}>
                                            {stuState}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-actions">
                        <button className='application_button' onClick={app_link}>
                            <span className="button-icon">📝</span>
                            수강신청
                        </button>
                    </div>
                    <div className="profile-actions">
                        <button className='application_button' onClick={result_link}>
                            <span className="button-icon">📝</span>
                            성적확인
                        </button>
                    </div>
                </div>

                <div className="profile-footer">
                    <button className="footer-link" onClick={() => navigate(-1)}>
                        ← 돌아가기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;