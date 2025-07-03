import React from "react";
import { useNavigate } from 'react-router-dom';
import './PfProfile.css';

const PfProfile = () => {
    const navigate = useNavigate();

    const addClass_link = () => {
        navigate('/Professor/PfProfile/Addclass');
    }
    const addScore_link = () => {
        navigate('/Professor/PfProfile/AddScore');
    }


    const { pf_num, pf_name, pf_per, pf_gen, pf_aff, pf_class } =
        { pf_num: 123, pf_name: 'Son', pf_per: 111111, pf_gen: '남', pf_aff: '공과대학', pf_class: '3' };

    return (
        <div className="pf-profile-container">
            <div className="pf-profile-wrapper">
                <div className="pf-profile-header">
                    <h1>교수 정보</h1>
                    <p>Professor Information</p>
                </div>

                <div className="pf-profile-card">
                    <div className="pf-profile-top">
                        <div className="pf-profile-avatar">
                            <div className="pf-avatar-placeholder">
                                <span>👤</span>
                            </div>
                            <h2>{pf_name}</h2>
                            <p className="pf-professor-number">{pf_num}</p>
                        </div>

                        <div className="pf-profile-actions">
                            <button className='pf-application-button' onClick={addClass_link}>
                                <span className="pf-button-icon">📝</span>
                                수업 등록
                            </button>
                            <button className='pf-application-button' onClick={addScore_link}>
                                <span className="pf-button-icon">📝</span>
                                성적 등록
                            </button>
                        </div>
                    </div>

                    <div className="pf-profile-info">
                        <div className="pf-info-section">
                            <h3>기본 정보</h3>
                            <div className="pf-info-grid">
                                <div className="pf-info-item">
                                    <span className="pf-info-icon">📋</span>
                                    <div className="pf-info-content">
                                        <span className="pf-info-label">교번</span>
                                        <span className="pf-info-value">{pf_num}</span>
                                    </div>
                                </div>
                                <div className="pf-info-item">
                                    <span className="pf-info-icon">👤</span>
                                    <div className="pf-info-content">
                                        <span className="pf-info-label">성함</span>
                                        <span className="pf-info-value">{pf_name}</span>
                                    </div>
                                </div>
                                <div className="pf-info-item">
                                    <span className="pf-info-icon">🆔</span>
                                    <div className="pf-info-content">
                                        <span className="pf-info-label">주민번호</span>
                                        <span className="pf-info-value">{pf_per}-*******</span>
                                    </div>
                                </div>
                                <div className="pf-info-item">
                                    <span className="pf-info-icon">⚧</span>
                                    <div className="pf-info-content">
                                        <span className="pf-info-label">성별</span>
                                        <span className="pf-info-value">{pf_gen}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pf-info-section">
                            <h3>대학 정보</h3>
                            <div className="pf-info-grid">
                                <div className="pf-info-item">
                                    <span className="pf-info-icon">🏫</span>
                                    <div className="pf-info-content">
                                        <span className="pf-info-label">담당학과</span>
                                        <span className="pf-info-value">{pf_aff}</span>
                                    </div>
                                </div>
                                <div className="pf-info-item">
                                    <span className="pf-info-icon">📚</span>
                                    <div className="pf-info-content">
                                        <span className="pf-info-label">개설수업</span>
                                        <span className="pf-info-value">{pf_class}개</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pf-profile-footer">
                        <button className="pf-footer-link" onClick={() => navigate(-1)}>
                            ← 돌아가기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PfProfile;
