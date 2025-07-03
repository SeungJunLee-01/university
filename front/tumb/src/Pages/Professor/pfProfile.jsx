import React from "react";
import { useNavigate } from 'react-router-dom';
import './pfProfile.css';

const pfProfile = () => {
    const navigate = useNavigate();

    const app_link = () => {
        navigate('/professor/AddClass');
    }

    //학번, 한글성명, 주민번호 앞자리, 성별, 소속학과, 학년, 학적상태(재학, 휴학, 자퇴)
    const {stu_num, stu_name, stu_per, stu_gen, stu_aff, stu_grade, stu_state}
     = {stu_num: 566, stu_name: 'Lee', stu_per: 111111, stu_gen: '남', stu_aff: '컴공', stu_grade: 3, stu_state: '재학'};

    // 학적 상태에 따른 클래스명 결정
    const getStatusClass = (status) => {
        switch(status) {
            case '재학': return 'status-active';
            case '휴학': return 'status-leave';
            case '자퇴': return 'status-quit';
            default: return '';
        }
    };

    return(
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
                            <h2>{stu_name}</h2>
                            <p className="student-number">{stu_num}</p>
                        </div>
                        
                        <div className={`status-badge ${getStatusClass(stu_state)}`}>
                            {stu_state}
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
                                        <span className="info-value">{stu_num}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">👤</span>
                                    <div className="info-content">
                                        <span className="info-label">이름</span>
                                        <span className="info-value">{stu_name}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">🆔</span>
                                    <div className="info-content">
                                        <span className="info-label">주민번호</span>
                                        <span className="info-value">{stu_per}-*******</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">⚧</span>
                                    <div className="info-content">
                                        <span className="info-label">성별</span>
                                        <span className="info-value">{stu_gen}</span>
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
                                        <span className="info-value">{stu_aff}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">📚</span>
                                    <div className="info-content">
                                        <span className="info-label">학년</span>
                                        <span className="info-value">{stu_grade}학년</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">✅</span>
                                    <div className="info-content">
                                        <span className="info-label">학적상태</span>
                                        <span className={`info-value ${getStatusClass(stu_state)}`}>
                                            {stu_state}
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