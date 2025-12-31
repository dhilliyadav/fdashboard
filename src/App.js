import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainLayout from './Layout/mainLayout';
import DashBoard from '../components/DashBoard';
function App(){
  return(
    <React.Fragment>
      <Router>
        <MainLayout>
          <Routes path="/">
            <Route exact path='/' element={<DashBoard/>}/>
          </Routes>
          <Routes>
            {/* Add more routes here as needed */}
          </Routes>
        </MainLayout>
      </Router>
    </React.Fragment>
  );
}
export default App;
