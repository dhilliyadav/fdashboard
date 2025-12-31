import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainLayout from './Layout/mainLayout';
import DashBoard from './components/DashBoard';
import Projects from './components/projects';
import Settings from './components/Settings';
function App(){
  return(
    <React.Fragment>
      <Router>
        <MainLayout>
          <Routes path="/">
            <Route exact path='/' element={<DashBoard/>}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/settings' element={<Settings />}/>
          </Routes>
        </MainLayout>
      </Router>
    </React.Fragment>
  );
}
export default App;
