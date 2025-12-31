import React from 'react';
import '../App.css';
import LogIn from '../Authentication/logIn' ;
function Settings(){
    return (
      <>
      <div className='settings-container'>
        <h2>Settings Component</h2>
        <LogIn />
        <h2>thank you</h2>
      </div>
      </>
    );

}
export default Settings;