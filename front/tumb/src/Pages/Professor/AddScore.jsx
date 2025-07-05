import React, { useState } from "react";
import './AddScore.css';
import { getCurrentSemester } from '../../utils/getCurrentSemester';

const AddScore = () => {
  const { semester } = getCurrentSemester();
  const [subject, setSubject] = useState('');
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});
  const [weights, setWeights] = useState({
    mid: 30,
    final: 30,
    assign: 20,
    attend: 20,
  });

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

  const getGradeFromScore = (score) => {
    const s = parseFloat(score);
    if (s >= 95) return 'A+';
    if (s >= 90) return 'A';
    if (s >= 85) return 'B+';
    if (s >= 80) return 'B';
    if (s >= 75) return 'C+';
    if (s >= 70) return 'C';
    if (s >= 65) return 'D+';
    if (s >= 60) return 'D';
    return 'F';
  };

  const calculateTotal = (score) => {
    const total =
      (parseFloat(score.mid) || 0) * (weights.mid / 100) +
      (parseFloat(score.final) || 0) * (weights.final / 100) +
      (parseFloat(score.assign) || 0) * (weights.assign / 100) +
      (parseFloat(score.attend) || 0) * (weights.attend / 100);
    return total.toFixed(2);
  };

  const handleSubjectSelect = (e) => {
    const selectedSub = e.target.value;
    setSubject(selectedSub);
    const studentList = studentData[selectedSub] || [];
    setStudents(studentList);

    const initialGrades = {};
    studentList.forEach(name => {
      initialGrades[name] = { mid: '', final: '', assign: '', attend: '' };
    });
    setGrades(initialGrades);
  };

  const handleScoreChange = (student, field, value) => {
    const onlyNumber = value.replace(/[^0-9]/g, '');
    let numeric = Number(onlyNumber);
    if (isNaN(numeric)) numeric = 0;
    numeric = Math.min(100, Math.max(0, numeric));

    setGrades(prev => ({
      ...prev,
      [student]: {
        ...prev[student],
        [field]: numeric.toString()
      }
    }));
  };

  const handleWeightChange = (field, value) => {
    const num = parseFloat(value);
    setWeights(prev => ({
      ...prev,
      [field]: isNaN(num) ? 0 : num
    }));
  };

  const handleCrosscheck = () => {
    const confirmSave = window.confirm('정말 저장하시겠습니까?');
    if (confirmSave) {
      handleSave();
    }
  };

  const handleSave = () => {
    const result = {};
    for (const student in grades) {
      const g = grades[student];
      const total = calculateTotal(g);
      const grade = getGradeFromScore(total);
      result[student] = { ...g, total, grade };
    }
    alert('✅ 성적이 저장되었습니다.');
    console.log(`📝 저장된 성적 (${semester} / ${subject}):`, result);
  };

  return (
    <div className='addscore-container'>
      <div className='addscore-card'>
        <h1>성적 관리페이지</h1>
        <p className="current-semester-text">📅 현재 학기: <strong>{semester}</strong></p>

        <div className='addscore-selector'>
          <label htmlFor='subject'>과목 선택</label>
          <select id='subject' value={subject} onChange={handleSubjectSelect}>
            <option value=''>선택하세요</option>
            {(subjectData[semester] || []).map((subj, idx) => (
              <option key={idx} value={subj}>{subj}</option>
            ))}
          </select>
        </div>

        {subject && (
          <>
            <div className="weight-setting-section">
              <h3>📊 성적 반영 비율 설정</h3>
              <div className="weight-row">
                <label>중간</label>
                <input type="number" value={weights.mid} onChange={(e) => handleWeightChange('mid', e.target.value)} />
                <label>기말</label>
                <input type="number" value={weights.final} onChange={(e) => handleWeightChange('final', e.target.value)} />
                <label>과제</label>
                <input type="number" value={weights.assign} onChange={(e) => handleWeightChange('assign', e.target.value)} />
                <label>출석</label>
                <input type="number" value={weights.attend} onChange={(e) => handleWeightChange('attend', e.target.value)} />
              </div>
              <p style={{ fontSize: '13px', marginTop: '5px', color: '#666' }}>※ 총합이 100%가 되도록 설정해주세요.</p>
            </div>

            <table className="score-input-table">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>중간</th>
                  <th>기말</th>
                  <th>과제</th>
                  <th>출석</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, idx) => (
                  <tr key={idx}>
                    <td>{student}</td>
                    {['mid', 'final', 'assign', 'attend'].map((field) => (
                      <td key={field}>
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="\d*"
                          value={grades[student]?.[field] || ''}
                          onChange={(e) => handleScoreChange(student, field, e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="score-summary-table">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>총점</th>
                  <th>학점</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, idx) => {
                  const g = grades[student] || {};
                  const total = calculateTotal(g);
                  const grade = getGradeFromScore(total);
                  return (
                    <tr key={idx}>
                      <td>{student}</td>
                      <td>{total}</td>
                      <td>{grade}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <button onClick={handleCrosscheck} className="addscore-save-button">저장하기</button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddScore;
