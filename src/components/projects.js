import { useState } from 'react';
import '../App.css';
import ProjectDetails from './projectDetails.tsx';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projectsList =["Project A","Project B","Project C","Project D"];
    return (
        <>
        <div className='projects-container'>
            <h1>Projects Component</h1>
           <div className='projectsList'>
            <h2>List of Projects:</h2>
            <ul>
                {projectsList.map((project, index) => (
                    <li key={index} className='projectNames' onClick={(e)=>{setSelectedProject(project) }}>{project}</li>
                ))}
            </ul>
           </div>
           <div className='projectDetails'>
            <ProjectDetails  selectedProject={selectedProject}/>
           </div>
        </div>
        </>
    );
}
export default Projects;