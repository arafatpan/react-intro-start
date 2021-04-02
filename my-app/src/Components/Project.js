import { FaTimes } from 'react-icons/fa'
 
const Project = ({project, onDelete}) => {
    return (
        <div className="container-fluid border p-1">
             <div class="row">
                 <div class="col-9">
                 <p>{project.project_name} </p>
                 </div>
                 <div class="col">
                 <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(project.id)} />
                 </div>
             </div>
            <p>{project.due_date}</p>
        </div>
    )
}
 
export default Project