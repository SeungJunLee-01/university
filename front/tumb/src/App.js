import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Log_in from './Pages/Log_in';
import Sign_up from './Pages/sign_up';

const App = () => {

    return(
        <div>
            <Routes>
                <Route path='/' element={<Log_in/>}/>
                <Route path='/sign_up' element={<Sign_up/>}/>
            </Routes>
        </div>

    );
};

export default App;