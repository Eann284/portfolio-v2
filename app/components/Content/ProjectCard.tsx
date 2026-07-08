import { techBgColors } from "./Panels/TechnologiesPanel"
import { Projects } from "./Panels/ProjectsPanel"
 
interface Props {
    project: Projects;
}

const colors: Record<string, string> = techBgColors;

function ProjectCard({project}: Props) {

  return (
    <div className="border rounded-xl px-4 py-2">

        <h1 className="text-xl font-bold">{project.title}</h1>
        <h3 className="text-sm font-light">{project.timeline}</h3>

        <div className="flex flex-row gap-2 mt-2">
            {project.stack.map((p)=>(
                
                // Tech Badge
                <div key={p} className={`px-6 py-0 rounded-br-xl rounded-tl-xl font-semibold text-white ${colors[p]}`} style={{backgroundColor: colors[p]}}>
                    {p}
                </div>
            ))}
        </div>
            
            
            <p className="mt-5">{project.description}</p>
    </div>
  )
}

export default ProjectCard