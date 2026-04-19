import React from 'react';
import '../App.css';
import LogIn from './logIn.tsx';
function SignUp(){
    return(
        
        <React.Fragment>
        <div className='signUp-container'>
            <h2>Sign Up Component</h2>
            <h2>Please create an account</h2>
            
            <>
            <LogIn />
            </>
        </div>  
        </React.Fragment>
    );
}
export default SignUp;