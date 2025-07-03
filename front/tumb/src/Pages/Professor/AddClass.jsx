import React, { useState } from "react";
import './AddClass.css';

const AddClass = () => {
  const [semester, setSemester] = useState('');
  const [classList, setClassList] = useState([]);

  const initialClassData = {
    '1학기': [
      { id: 1, name: '수학', professor: '김교수', time: '월 1,2교시' },
      { id: 2, name: '물리', professor: '박교수', time: '화 3,4교시' }
    ],
    '2학기': [
      { id: 3, name: '영어', professor: '이교수', time: '수 5,6교시' },
      { id: 4, name: '자료구조', professor: '정교수', time: '목 1,2교시' }
    ]
  };

  const handleSemesterChange = (e) => {
    const selectedSemester = e.target.value;
    setSemester(selectedSemester);
    setClassList(initialClassData[selectedSemester] || []);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedList = [...classList];
    updatedList[index][field] = value;
    setClassList(updatedList);
  };

  const handleAddClass = () => {
    const newClass = {
      id: Date.now(),
      name: '',
      professor: '',
      time: ''
    };
    setClassList([...classList, newClass]);
  };

  const handleDeleteClass = (id) => {
    setClassList(classList.filter(cls => cls.id !== id));
  };

  const handleSave = () => {
    alert(`${semester} 수업 정보가 저장되었습니다.`);
    console.log(`${semester} 저장된 수업 리스트:`, classList);
  };

  return (
    <div className='openclass-container'>
      <div className='openclass-card'>
        <h1>수업 개설 관리</h1>

        {/* 학기 선택 */}
        <div className='openclass-selector'>
          <label htmlFor='semester'>학기 선택</label>
          <select id='semester' value={semester} onChange={handleSemesterChange}>
            <option value=''>선택하세요</option>
            <option value='1학기'>1학기</option>
            <option value='2학기'>2학기</option>
          </select>
        </div>

        {/* 수업 리스트 */}
        {semester && (
          <div className="class-list">
            <div className="button-group">
              <button onClick={handleAddClass}>➕ 수업 추가</button>
              <button onClick={handleSave}>💾 저장</button>
            </div>

            <h2>{semester} 개설 수업 목록</h2>

            <table>
              <thead>
                <tr>
                  <th>과목명</th>
                  <th>담당 교수</th>
                  <th>수업 시간</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {classList.length === 0 ? (
                  <tr><td colSpan="4" style={{ textAlign: 'center' }}>개설된 수업이 없습니다.</td></tr>
                ) : (
                  classList.map((cls, index) => (
                    <tr key={cls.id}>
                      <td><input type="text" value={cls.name} onChange={(e) => handleFieldChange(index, 'name', e.target.value)} /></td>
                      <td><input type="text" value={cls.professor} onChange={(e) => handleFieldChange(index, 'professor', e.target.value)} /></td>
                      <td><input type="text" value={cls.time} onChange={(e) => handleFieldChange(index, 'time', e.target.value)} /></td>
                      <td><button onClick={() => handleDeleteClass(cls.id)}>삭제</button></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddClass;

