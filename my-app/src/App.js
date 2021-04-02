import './App.css';
import Student from './Components/Student'
import Projects from './Components/Projects'
import { useState } from 'react'


  const App = () => {
    const [projects, setProjects] = useState(
      [
        {   
            id: 1,
            project_name : "Java",
            due_date : "January 10, 2021"
        },
        {
            id: 2,
            project_name : "C++",
            due_date : "June 06, 2020"
        },
        {
            id: 3,
            project_name : "C#",
            due_date : "August 16, 2020"
        }
    ]
    )
  
    const student = {
      name: 'Aerfati Abulikemu',
      major:'Information Systems',
      interest:'Game Designing',
  
    }
  
    //Delete Project
    const deleteProject = (id) => {
      setProjects(projects.filter((project)=>project.id !== id))
    }
  
  return (

    <div class="container-fluid">
    <div class="row">
        <div class="col"></div>
        <div class="col">
  <Student student= {student}/>
  {projects.length > 0 ? (<Projects projects = {projects} onDelete = {deleteProject} />) : ('No project to show')}
  </div>
        <div class="col"></div>
    </div>
</div>

  );
}

export default App;
