import React, { useState } from 'react';

const Application = () => {
    const {stu_num, stu_name, stu_gen} = {stu_num: 566, stu_name: 'Lee', stu_gen: '남'};    //임시 학생 정보
    const {sub_num_front, sub_num_back, sub_name, sub_score} = {sub_num_front: 11111, sub_num_back: 11, sub_name: '교과목명', nub_score_: 3};

    const [subNumFront, setSubNumFront] = useState(0);  //교과목 코드
    const [subNumBack, setSubNumBack] = useState(0);

    //수강신청 기능, 서버에 올리는 기능 넣을 것
    const applicate = () => {
        
    }

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

                <table border={1}>
                    <tr>
                        <th>강의번호</th>
                        <th>교과목명</th>
                        <th>학점</th>
                        <th>신청</th>
                    </tr>
                    <tr>
                        <th>{sub_num_front}-{sub_num_back}</th>
                        <th>{sub_name}</th>
                        <th>{sub_score}</th>
                        <th><button onClick={applicate}>신청버튼</button></th>
                    </tr>
                </table>
            </div>
        </div>

    );
};

export default Application;