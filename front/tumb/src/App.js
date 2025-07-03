import { Routes, Route, Link, useNavigate, BrowserRouter } from 'react-router-dom';
import Log_in from './Pages/Log_in';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Students/Profile';
import Application from './Pages/Students/Application';
import PfProfile from './Pages/Professor/PfProfile';
import Addclass from './Pages/Professor/AddClass';
import AddScore from './Pages/Professor/AddScore';
import AddStu from './Pages/Professor/AddStu';

const App = () => {

    return(
        <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Log_in/>}/>
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route path='/Students/Profile' element={<Profile/>}/>
                <Route path='/Students/Application' element={<Application/>}/>
                <Route path='/Professor/PfProfile' element={<PfProfile/>}/>
                <Route path='/Professor/PfProfile/Addclass' element={<Addclass/>}/>
                <Route path='/Professor/PfProfile/AddScore' element={<AddScore/>}/>
                <Route path='/Professor/PfProfile/AddStu' element={<AddStu/>}/>
            </Routes>
          </BrowserRouter>  
        </div>

    );
};

export default App;