import React from "react";
import './registration.css';
function LogIn(){
    return( 

        <React.Fragment>
        <div className='logIn-container'>
            <h2>Please enter your credentials</h2>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" />
            </div>
            <div>
                <button type="submit">Log In</button>
            </div>
        </div>
        </React.Fragment>
    );
}
export default LogIn;