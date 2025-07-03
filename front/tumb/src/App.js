import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Students/Profile';
import Application from './Pages/Students/Application';
import Result from './Pages/Students/Result';

const App = () => {

    return(
        <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route path='/Students/Profile' element={<Profile/>}/>
                <Route path='/Students/Application' element={<Application/>}/>
                <Route path='/Students/Result' element={<Result />} />
            </Routes>
          </BrowserRouter>  
        </div>

    );
};

export default App;