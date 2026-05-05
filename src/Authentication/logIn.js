import React from "react";
//import axios from 'axios';
//import { useNavigate } from "react-router-dom";
import SignUp from "./signUp.js";
import './registration.css';
function LogIn(){
   // const navigate = useNavigate();
     const [email,setEmail]=React.useState("");
     const [userName,setUserName]=React.useState('')
    const [password,setPassword]=React.useState("");
    const handleChange = async (e)=>{
        e?.preventDefault();
        console.log("userName", userName);
        console.log("email: ",email);
        console.log("Password: ",password);
        
        // try{
        //     console.log("entered into try block");
        //     const response = await axios.post('http://localhost:5000/api/auth/login',{email,password});
        //     console.log("axios block", response);
        //     localStorage.setItem("token", response.data.token);
        //     alert("login successful")
        //    navigate('/');

        // } catch(err)
        // { 
        //     console.log(" login Failed");
        //     console.log("error occured", err)
        // }
    }

    return( 
       <React.Fragment>
        <div className='logIn-container'>
            <h2>Please enter your credentials</h2>
            <form onSubmit={handleChange}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" onChange={(e)=>{setUserName(e?.target?.value)}} />
            </div>
              <div>
                <label htmlFor="Email">email: </label>
                <input type="email" id="email" name="email" onChange={(e)=>(setEmail(e?.target?.value))}/>
            </div>
            <div>   
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" onChange={(e)=>(setPassword(e?.target?.value))}/>
            </div>
            <div>
                <button type="submit" >Log In</button>
            </div>
            </form>
            <h1><SignUp /> Create Account</h1>
        </div>
        </React.Fragment>
    );
}
 export default LogIn;
