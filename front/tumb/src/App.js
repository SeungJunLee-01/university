import { Routes, Route, Link, useNavigate, BrowserRouter } from 'react-router-dom';
import Log_in from './Pages/Log_in';
import Sign_up from './Pages/sign_up';

const App = () => {

    return(
        <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Log_in/>}/>
                <Route path='/sign_up' element={<Sign_up/>}/>
            </Routes>
          </BrowserRouter>  
        </div>

    );
};

export default App;