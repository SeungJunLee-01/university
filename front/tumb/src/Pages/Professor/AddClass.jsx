import React, { useState, useEffect } from "react";
import './AddClass.css';
import { getCurrentSemester } from '../../utils/getCurrentSemester';

const AddClass = () => {
  const { semester } = getCurrentSemester(); // 자동 학기 적용
  const [classList, setClassList] = useState([]);

const initialClassData = {
  '1학기': [
    { id: 1, classcode: '12345-01', name: '수학', credit: '3' },
    { id: 2, classcode: '12346-02', name: '물리', credit: '3' }
  ],
  '2학기': [
    { id: 3, classcode: '22345-03', name: '영어', credit: '2' },
    { id: 4, classcode: '22346-04', name: '화학', credit: '3' }
  ],
  '여름 계절학기': [
    { id: 5, classcode: '33311-01', name: '인공지능 개론', credit: '3' },
    { id: 6, classcode: '33312-02', name: '영상처리', credit: '3' }
  ],
  '겨울 계절학기': [
    { id: 7, classcode: '44411-01', name: '웹개발 실습', credit: '2' },
    { id: 8, classcode: '44412-02', name: '파이썬 프로그래밍', credit: '3' }
  ]
};


  useEffect(() => {
    setClassList(initialClassData[semester] || []);
  }, [semester]);

  const handleFieldChange = (index, field, value) => {
    const updatedList = [...classList];

    if (field === 'credit') {
      const onlyNumber = value.replace(/[^0-9]/g, '');
      if (onlyNumber.length <= 1) {
        updatedList[index][field] = onlyNumber;
      }
    } else if (field === 'classcode') {
      const cleaned = value.replace(/[^0-9]/g, '');
      let formatted = '';
      if (cleaned.length <= 5) {
        formatted = cleaned;
      } else if (cleaned.length <= 7) {
        formatted = `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
      } else {
        formatted = `${cleaned.slice(0, 5)}-${cleaned.slice(5, 7)}`;
      }
      updatedList[index][field] = formatted;
    } else {
      updatedList[index][field] = value;
    }

    setClassList(updatedList);
  };

  const handleAddClass = () => {
    const newClass = {
      id: Date.now(),
      classcode: '',
      name: '',
      credit: ''
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
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>개설된 수업이 없습니다.</td>
                </tr>
              ) : (
                classList.map((cls, index) => (
                  <tr key={cls.id}>
                    <td>
                      <input
                        type="text"
                        value={cls.classcode || ''}
                        onChange={(e) => handleFieldChange(index, 'classcode', e.target.value)}
                        maxLength={8}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={cls.name || ''}
                        onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={cls.credit || ''}
                        onChange={(e) => handleFieldChange(index, 'credit', e.target.value)}
                        maxLength={1}
                      />
                    </td>
                    <td>
                      <button onClick={() => handleDeleteClass(cls.id)}>삭제</button>
                    </td>
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
