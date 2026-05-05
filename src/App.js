import React from 'react';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import MainLayout from './Layout/mainLayout';
import DashBoard from './components/DashBoard';
import LogIn from './Authentication/logIn';
import Projects from './components/projects';
import Settings from './components/Settings';

function App(){
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/LogIn" />
    }
  return(
    <React.Fragment>
      <Router>
        <MainLayout>
          <Routes>
          <Route  path='/' element={ <LogIn/> } />
            <Route  path='/dashBoard' element={<PrivateRoute > <DashBoard/></PrivateRoute>}/>
            <Route path='/projects' element={<PrivateRoute><Projects /></PrivateRoute>}/>
            <Route path='/settings' element={<PrivateRoute><Settings /></PrivateRoute>}/>
          </Routes>
        </MainLayout>
      </Router>
    </React.Fragment>
  );
}
export default App;
