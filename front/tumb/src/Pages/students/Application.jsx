import React, { useState } from 'react';
import './Application.css';

const Application = () => {
    const {stu_num, stu_name, stu_gen} = {stu_num: 566, stu_name: 'Lee', stu_gen: '남'};    //임시 학생 정보
    const {sub_num_front, sub_num_back, sub_name, sub_score} = {sub_num_front: 11111, sub_num_back: 11, sub_name: '교과목명', sub_score: 3};

    const [subNumFront, setSubNumFront] = useState(0);  //교과목 코드
    const [subNumBack, setSubNumBack] = useState(0);

    //수강신청 기능, 서버에 올리는 기능 넣을 것
    const applicate = () => {
        alert('수강신청이 완료되었습니다!');
    }

    return(
        <div className="application-container">
            <div className="application-wrapper">
                <div className="application-header">
                    <h1>수강신청</h1>
                    <p>Course Registration</p>
                </div>

                <div className="student-info-card">
                    <h2>학생 정보</h2>
                    <table className="student-info-table">
                        <tbody>
                            <tr>
                                <th>학번</th>
                                <th>이름</th>
                                <th>성별</th>
                            </tr>
                            <tr>
                                <td>{stu_num}</td>
                                <td>{stu_name}</td>
                                <td>{stu_gen}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="course-search-card">
                    <h2>과목 검색</h2>
                    <div className="course-input-group">
                        <table className="input-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="text" 
                                            maxLength="5"
                                            value={subNumFront}
                                            onInput={(e) => setSubNumFront(e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5))}
                                            placeholder="00000"
                                            className="course-input"
                                        />
                                        <span className="input-separator">-</span>
                                        <input
                                            type="text" 
                                            maxLength="2"
                                            value={subNumBack}
                                            onInput={(e) => setSubNumBack(e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 2))}
                                            placeholder="00"
                                            className="course-input small"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="add-button">
                            <span>+</span> 추가
                        </button>
                    </div>

                    <div className="course-list">
                        <h3>검색 결과</h3>
                        <table border={1} className="course-table">
                            <thead>
                                <tr>
                                    <th>강의번호</th>
                                    <th>교과목명</th>
                                    <th>학점</th>
                                    <th>신청</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{sub_num_front}-{sub_num_back}</td>
                                    <td>{sub_name}</td>
                                    <td>{sub_score}</td>
                                    <td>
                                        <button onClick={applicate} className="apply-button">
                                            신청버튼
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;