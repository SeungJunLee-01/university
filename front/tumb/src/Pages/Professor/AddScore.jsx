import React, { useState } from "react";
import './AddScore.css';
import { getCurrentSemester } from '../../utils/getCurrentSemester';

const AddScore = () => {
  const { semester } = getCurrentSemester(); // 자동 학기 설정
  const [subject, setSubject] = useState('');
  const [students, setStudents] = useState([]);

  const subjectData = {
    '1학기': ['수학', '물리', '프로그래밍'],
    '2학기': ['영어', '화학', '자료구조'],
    '여름 계절학기': ['인공지능 개론', '영상처리'],
    '겨울 계절학기': ['웹개발 실습', '파이썬 프로그래밍']
  };

  const studentData = {
    '수학': ['김철수', '이영희', '박민수'],
    '물리': ['정수진', '한지우'],
    '프로그래밍': ['강민지', '최우진'],
    '영어': ['윤서준', '배하늘'],
    '화학': ['문지호', '장예린'],
    '자료구조': ['황지훈', '고은별'],
    '인공지능 개론': ['김태형', '이슬기', '정민아'],
    '영상처리': ['백지훈', '최지현'],
    '웹개발 실습': ['윤다연', '박세진', '한주형'],
    '파이썬 프로그래밍': ['조은우', '심가람']
  };


  const gradeOptions = [
    'A+', 'A', 'A-',
    'B+', 'B', 'B-',
    'C+', 'C', 'C-',
    'D+', 'D', 'D-',
    'F'
  ];

  const [grades, setGrades] = useState({});

  const handleSubjectSelect = (e) => {
    const selectedSub = e.target.value;
    setSubject(selectedSub);
    setStudents(studentData[selectedSub] || []);
    const initialGrades = {};
    (studentData[selectedSub] || []).forEach(name => {
      initialGrades[name] = '';
    });
    setGrades(initialGrades);
  };

  const handleGradeChange = (studentName, newGrade) => {
    setGrades(prev => ({
      ...prev,
      [studentName]: newGrade
    }));
  };

  const handleCrosscheck = () => {
    const confirmSave = window.confirm('정말 저장하시겠습니까?');
    if (confirmSave) {
      handleSave();
    }
  };

  const handleSave = () => {
    alert('✅ 성적이 저장되었습니다.');
    console.log(`📝 저장된 성적 (${semester} / ${subject}):`, grades);
  };

  return (
    <div className='addscore-container'>
      <div className='addscore-card'>
        <h1>성적 관리페이지</h1>
        <p className="current-semester-text">📅 현재 학기: <strong>{semester}</strong></p>

        {/* 과목 선택 */}
        {semester && (
          <div className='addscore-selector'>
            <label htmlFor='subject'>과목 선택</label>
            <select id='subject' value={subject} onChange={handleSubjectSelect}>
              <option value=''>선택하세요</option>
              {(subjectData[semester] || []).map((subj, idx) => (
                <option key={idx} value={subj}>{subj}</option>
              ))}
            </select>
          </div>
        )}

        {/* 학생 성적 입력 */}
        {subject && students.length > 0 && (
          <div className="score-edit-list">
            <h2>{semester} / {subject} 성적 입력</h2>
            <ul>
              {students.map((student, idx) => (
                <li key={idx}>
                  <label>{student}</label>
                  <select
                    value={grades[student]}
                    onChange={(e) => handleGradeChange(student, e.target.value)}
                  >
                    <option value="">성적 선택</option>
                    {gradeOptions.map((g, i) => (
                      <option key={i} value={g}>{g}</option>
                    ))}
                  </select>
                </li>
              ))}
            </ul>
            <button onClick={handleCrosscheck} className="addscore-save-button">저장하기</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddScore;
