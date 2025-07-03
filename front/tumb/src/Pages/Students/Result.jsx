import React, { useState } from 'react';
import './Result.css';

function Result() {

    const sub1 = {
        semester: '2025-1',
        name: '교과목명1',
        grade: 'A+'
    };
    const sub2 = {
        semester: '2024-2',
        name: '교과목명2',
        grade: 'B+'
    };

    const subjects = [sub1, sub2];
    const [selectSemester, setSelectSemester] = useState('');


    //성적 정보 가져오기
    const subGrade = async () => {
        try{
            const subGradeData = await fetch('주소 받아쓰기', {
                methode: "GET",
                headers: {
                    "Content-Type" : "링크",
                },
            });
            const subGradeResult = await subGradeData.json();

            if(subGradeData.status === 200) {
                console.log(subGradeResult);
                
            } else{
                alert('성적 정보를 불러오지 못하였습니다.');
            }
        }
        catch(error) {
            console.error(error);
        }
    };


    // 성적을 점수로 변환하는 함수
    const getGradeColor = (grade) => {
        if (grade.includes('A')) return 'grade-a';
        if (grade.includes('B')) return 'grade-b';
        if (grade.includes('C')) return 'grade-c';
        return 'grade-d';
    };

    return(
        <div className="result-container">
            <div className="result-wrapper">
                <div className="result-header">
                    <h1>성적 조회</h1>
                    <p>Grade Report</p>
                </div>

                <div className="result-card">
                    <div className="semester-select-section">
                        <h2>학기 선택</h2>
                        <div className="select-wrapper">
                            <select 
                                className="semester-select"
                                onChange={(e) => setSelectSemester(e.target.value)}
                            >
                                <option value="">학기를 선택하세요</option>
                                {subjects.map((subject, index) => (
                                    <option key={index} value={subject.semester}>
                                        {subject.semester}
                                    </option>
                                ))}
                            </select>
                            <span className="select-arrow">▼</span>
                        </div>
                    </div>
                    
                    {/* 선택한 학기의 성적 정보 */}
                    {selectSemester && (
                        <div className="grade-section">
                            <h2>{selectSemester} 학기 성적</h2>
                            <div className="grade-list">
                                {subjects.filter(subject => subject.semester === selectSemester).map((subject, index) => (
                                    <div key={index} className="grade-item">
                                        <div className="grade-info">
                                            <div className="subject-info">
                                                <span className="semester-badge">{subject.semester}</span>
                                                <h3 className="subject-name">{subject.name}</h3>
                                            </div>
                                            <div className={`grade-display ${getGradeColor(subject.grade)}`}>
                                                <span className="grade-label">성적</span>
                                                <span className="grade-value">{subject.grade}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {!selectSemester && (
                        <div className="empty-state">
                            <span className="empty-icon">📊</span>
                            <p>학기를 선택하여 성적을 확인하세요</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Result;