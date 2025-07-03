import React from "react";
import { useNavigate } from 'react-router-dom';
import './pfProfile.css';

const PfProfile = () => {
    const navigate = useNavigate();

    const addClass_link = () => {
        navigate('/Professor/PfProfile/Addclass');
    }
    const addScore_link = () => {
        navigate('/Professor/PfProfile/AddScore');
    }
    const addStu_link = () => {
        navigate('/Professor/PfProfile/AddStu');
    }

    //교수번호, 한글성명, 주민번호 앞자리, 성별, 소속학과
    const {pf_num, pf_name, pf_per, pf_gen, pf_aff, pf_class}
     = {pf_num: 123, pf_name: 'Son', pf_per: 111111, pf_gen: '남', pf_aff: '공과대학', pf_class:'3'};


    return(
        <div className="profile-container">
            <div className="profile-wrapper">
                <div className="profile-header">
                    <h1>교수 정보</h1>
                    <p>Professor Information</p>
                </div>

                <div className="profile-card">
                    <div className="profile-top">
                        <div className="profile-avatar">
                            <div className="avatar-placeholder">
                                <span>👤</span>
                            </div>
                            <h2>{pf_name}</h2>
                            <p className="professor-number">{pf_num}</p>
                        </div>
                       <div className="profile-actions">
                        <div className="profile-actions">
                            <button className='application_button' onClick={addClass_link}>
                                <span className="button-icon">📝</span>
                                수업 등록
                            </button>
                        </div>
                        <div className="profile-actions">
                            <button className='application_button' onClick={addScore_link}>
                                <span className="button-icon">📝</span>
                                성적 등록
                            </button>
                        </div>
                        <div className="profile-actions">
                            <button className='application_button' onClick={addStu_link}>
                                <span className="button-icon">📝</span>
                                수강 등록
                            </button>
                        </div>
                    </div>
                    </div>
                  
                    <div className="profile-info">
                        <div className="info-section">
                            <h3>기본 정보</h3>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-icon">📋</span>
                                    <div className="info-content">
                                        <span className="info-label">교번</span>
                                        <span className="info-value">{pf_num}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">👤</span>
                                    <div className="info-content">
                                        <span className="info-label">성함</span>
                                        <span className="info-value">{pf_name}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">🆔</span>
                                    <div className="info-content">
                                        <span className="info-label">주민번호</span>
                                        <span className="info-value">{pf_per}-*******</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">⚧</span>
                                    <div className="info-content">
                                        <span className="info-label">성별</span>
                                        <span className="info-value">{pf_gen}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-section">
                            <h3>대학 정보</h3>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-icon">🏫</span>
                                    <div className="info-content">
                                        <span className="info-label">담당학과</span>
                                        <span className="info-value">{pf_aff}</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">📚</span>
                                    <div className="info-content">
                                        <span className="info-label">개설수업</span>
                                        <span className="info-value">{pf_class}개</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default PfProfile;