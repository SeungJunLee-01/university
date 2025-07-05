import React, { useState, useEffect } from "react";
import './AddClass.css';
import { getCurrentSemester } from '../../utils/getCurrentSemester';

const AddClass = () => {
  const { semester } = getCurrentSemester(); // 자동 학기 적용
  const [classList, setClassList] = useState([]);

  const initialClassData = {
    '1학기': [
      { id: 1, classcde: '11111-11', name: '수학', credit: '3' },
      { id: 2, classcde: '11112-11', name: '수학', credit: '3' }
    ],
    '2학기': [
      { id: 3, classcde: '11111-13', name: '수학', credit: '3' },
      { id: 4, classcde: '11111-14', name: '수학', credit: '3' }
    ]
  };

  // 자동으로 초기 수업 데이터 세팅
  useEffect(() => {
    setClassList(initialClassData[semester] || []);
  }, [semester]);

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

  const handleCrosscheck = () => {
    const confirmSave = window.confirm('정말 저장하시겠습니까?');
    if (confirmSave){
       handleSave();
    }
  };

  const handleSave = () => {
    alert(`${semester} 수업 정보가 저장되었습니다.`);
    console.log(`${semester} 저장된 수업 리스트:`, classList);
  };

  return (
    <div className='openclass-container'>
      <div className='openclass-card'>
        <h1>수업 개설 관리</h1>
        <p className="current-semester-text">📅 현재 학기: <strong>{semester}</strong></p>

        {/* 수업 리스트 */}
        <div className="class-list">
          <div className="button-group">
            <button onClick={handleAddClass}>➕ 수업 추가</button>
            <button onClick={handleCrosscheck}>💾 저장</button>
          </div>

          <h2>{semester} 개설 수업 목록</h2>

          <table>
            <thead>
              <tr>
                <th>과목코드</th>
                <th>과목명</th>
                <th>학점</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {classList.length === 0 ? (
                <tr><td colSpan="4" style={{ textAlign: 'center' }}>개설된 수업이 없습니다.</td></tr>
              ) : (
                classList.map((cls, index) => (
                  <tr key={cls.id}>
                    <td><input type="text" value={cls.classcode} onChange={(e) => handleFieldChange(index, 'classcode', e.target.value)} /></td>
                    <td><input type="text" value={cls.name} onChange={(e) => handleFieldChange(index, 'name', e.target.value)} /></td>
                    <td><input type="text" value={cls.cerdit} onChange={(e) => handleFieldChange(index, 'credit', e.target.value)} /></td>
                    <td><button onClick={() => handleDeleteClass(cls.id)}>삭제</button></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
