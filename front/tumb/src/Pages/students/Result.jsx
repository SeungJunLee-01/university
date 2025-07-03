import React, { useState } from 'react';

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


    return(
        <div>
            {/* //성적확인 할 학기 선택 */}
            <select onChange={(e) => setSelectSemester(e.target.value)}>
                <option value="">학기를 선택하세요</option>
                {subjects.map((subject, index) => (
                    <option key={index} value={subject.semester}>
                        {subject.semester}
                    </option>
                ))}
            </select>
            
            {/* 선택한 학기의 성적 정보 */}
            {selectSemester && subjects.filter(subject => subject.semester === selectSemester).map((subject, index) => (
                <div key={index}>
                    <p>학기: {subject.semester}, 과목명: {subject.name}, 성적: {subject.grade}</p>
                </div>
            ))
        }

            
        </div>
    );
};
export default Result;