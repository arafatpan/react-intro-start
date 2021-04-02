import Project from './Project'

const Projects = ({projects, onDelete}) => {
    return (
        <>
            <div class="border m-2 p-2">
                    <h4>Projects</h4>
                    {projects.map((project)=>(
                        <Project key={project.id} project={project} onDelete = {onDelete} />
                    ))}
            </div>
        </>
    )
}

export default Projects
