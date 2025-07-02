import React from "react";
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate();

    const app_link = () => {
        navigate('/students/Application');
    }

    //학번, 한글성명, 주민번호 앞자리, 성별, 소속학과, 학년, 학적상태(재학, 휴학, 자퇴)
    const {stu_num, stu_name, stu_per, stu_gen, stu_aff, stu_grade, stu_state}
     = {stu_num: 566, stu_name: 'Lee', stu_per: 111111, stu_gen: '남', stu_aff: '컴공', stu_grade: 3, stu_state: '재학'};

    return(
        <div>
            <table>
                <tr>
                    <th>{stu_num}</th>
                    <th>{stu_name}</th>
                    <th>{stu_per}</th>
                    <th>{stu_gen}</th>
                </tr>
                <tr>
                    <th>{stu_aff}</th>
                    <th>{stu_grade}</th>
                    <th>{stu_state}</th>
                </tr>
            </table>
            <button className='application_button' onClick={app_link}>수강신청</button>
        </div>

    );
};

export default Profile;