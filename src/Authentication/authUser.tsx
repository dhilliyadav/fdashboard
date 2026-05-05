import React from 'react';
function AuthUser(props:any){
    return (
      <>
      <div className='authUser-container'>
        <h2>Auth User Component</h2>
        <h2>{props?.userName}</h2>
        <h2>welcome</h2>
      </div>
      </>
    );  
}
export default AuthUser;