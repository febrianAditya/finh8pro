// import logo from './logo.svg';
// import './App.css';
import DashboardPage from './pages/DashboardPage/dashboardPage';
import LoginPage from "./pages/LoginPage/loginPage"
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AboutCompany from './pages/AboutPage/AboutCompany';
import AboutPage from './pages/AboutPage/AboutPage';
import AboutMe from './pages/AboutPage/AboutMe';
import UserDetail from './pages/UserDetail/userDetailPage';
import DataDetail from './pages/DataDetail/dataDetail';
import ProtectedRoute from './components/protectedRoute';
import SandBoxPage from './pages/Sandbox/sandBoxPage';

import { NavbarComponent } from './components';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">

      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<DashboardPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/about' element={<AboutPage/>}>
          <Route path='about-company' element={<AboutCompany/>}/>
          <Route path='about-me' element={<AboutMe/>}/>
        </Route>
        <Route path='/user/:id' element={
          <ProtectedRoute>
            <UserDetail/>
          </ProtectedRoute>
        }/>
        <Route path='/data/:id' element={<DataDetail/>}/>
        <Route path='/sandbox' element={<SandBoxPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
