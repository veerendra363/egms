import {Route, Routes} from 'react-router-dom'
import AddGoal from './components/Goal/AddGoal';
import EditGoal from './components/Goal/EditGoal';
import EmployeeContainer from './container/Employee';
import AdminContainer from './container/Employee/Admin';
import SuperAdminContainer from './container/Employee/SuperAdmin';
import HomeContainer from './container/Home';
import LoginContainer from './container/Login';
import SignupContainer from './container/Signup';
import './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path="/login/:role" element={<LoginContainer />} />
        <Route path='/signup' element={<SignupContainer />} />
        <Route path='/employee/:id/:isVisible' element={<EmployeeContainer/>} />
        <Route path='/addgoal' element={<AddGoal />} />
        <Route path='/editgoal' element={<EditGoal />} />
        <Route path='/admin/:id' element={<AdminContainer />} />
        <Route path='/superadmin' element={<SuperAdminContainer />} />
      </Routes>
    </div>
  );
}

export default App;
