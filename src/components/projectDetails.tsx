import React from 'react';
import '../App.css';
function ProjectDetails(props:any){
    return (
      <>
      <div className='projectDetails-container'>
        <h2>Project Details Component</h2>
        <h2>{props?.selectedProject}</h2>
        <h2>thank you</h2>
      </div>
      </>
    );  
}
export default ProjectDetails;