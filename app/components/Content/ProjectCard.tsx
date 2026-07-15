import { techBgColors } from "../Colors";
import { Projects } from "./Panels/ProjectsPanel"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Badge } from '@/components/ui/badge';
import { CircleCheckBig } from 'lucide-react';

interface Props {
    project: Projects;
}

const colors: Record<string, string> = techBgColors;

function ProjectCard({project}: Props) {

  return (
    // <div className="border rounded-xl px-4 py-2">

    //     <h1 className="text-xl font-bold"></h1>
    //     <h3 className="text-sm font-light"></h3>

    //     <div className="flex flex-row gap-2 mt-2">
    //         
    //     </div>
            
            
    //         <p className="mt-5">{project.description}</p>
    // </div>

    <Card>
        <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="flex flex-row gap-2">
                {project.stack.map((p)=>(
                <Badge key={p} className={`text-white font-semibold ${colors[p]} w-20 rounded`} style={{backgroundColor: colors[p]}}>
                    {p}
                </Badge>
            ))}
            </CardDescription>
            <CardAction>
                <Badge>
                {project.timeline}
                </Badge>
                </CardAction>
        </CardHeader>
        <CardContent>
            <p>{project.description}</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
  )
}

export default ProjectCard