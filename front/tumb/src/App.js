import { Routes, Route, Link, useNavigate, BrowserRouter } from 'react-router-dom';
import Log_in from './Pages/Log_in';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Students/Profile';
import Application from './Pages/Students/Application';

const App = () => {

    return(
        <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Log_in/>}/>
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route path='/Students/Profile' element={<Profile/>}/>
                <Route path='/Students/Application' element={<Application/>}/>
            </Routes>
          </BrowserRouter>  
        </div>

    );
};

export default App;