import React, { useState } from 'react';

const Application = () => {
    const {stu_num, stu_name, stu_gen} = {stu_num: 566, stu_name: 'Lee', stu_gen: '남'};
    const sub_num = '11111-11'

    return(
        <div>
            <table>
                <th>{stu_num}</th>
                <th>{stu_name}</th>
                <th>{stu_gen}</th>
            </table>

            <div>
                
            </div>
        </div>

    );
};

export default Application;