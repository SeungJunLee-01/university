import React, { useState } from 'react';

const Application = () => {
    const {stu_num, stu_name, stu_gen} = {stu_num: 566, stu_name: 'Lee', stu_gen: '남'};    //임시 학생 정보
    const sub_num = '11111-11'  //임시 과목 코드

    const [subNumFront, setSubNumFront] = useState(0);  //교과목 코드
    const [subNumBack, setSubNumBack] = useState(0);

    return(
        <div>
            <table>
                <th>{stu_num}</th>
                <th>{stu_name}</th>
                <th>{stu_gen}</th>
            </table>


            <div>
                <table>
                    <input
                        type="text" maxLength="5"
                        value={subNumFront}
                        onInput={(e) => setSubNumFront(e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5))}
                    />
                    <span>-</span>
                    <input
                        type="text" maxLength="2"
                        value={subNumBack}
                        onInput={(e) => setSubNumBack(e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 2))}
                    />
                </table>
                <button>추가</button>

                <table>
                    <tr>
                        <th>강의번호</th>
                        <th>교과목명</th>
                        <th>학점</th>
                        <th>강의시간</th>
                        <th>신청</th>
                    </tr>
                    <tr>
                        <th>여기서부터 서버에서 불러와서 정리</th>
                    </tr>
                </table>
            </div>
        </div>

    );
};

export default Application;