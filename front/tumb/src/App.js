import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Students/Profile';
import Application from './Pages/Students/Application';
import PfProfile from './Pages/Professor/pfProfile';
import AddClass from './Pages/Professor/AddClass';
import AddScore from './Pages/Professor/AddScore';
import Result from './Pages/Students/Result';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Students/Profile' element={<Profile />} />
          <Route path='/Students/Application' element={<Application />} />
          <Route path='/Professor/PfProfile' element={<PfProfile />} />
          <Route path='/Professor/PfProfile/AddClass' element={<AddClass />} />
          <Route path='/Professor/PfProfile/AddScore' element={<AddScore />} />
          <Route path='/Students/Result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
