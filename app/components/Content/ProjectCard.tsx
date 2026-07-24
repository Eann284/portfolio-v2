import { techBgColors } from "../Colors";
import { Projects } from "./Panels/ProjectsPanel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { CircleCheckBig } from "lucide-react";

interface Props {
  project: Projects;
}

const colors: Record<string, string> = techBgColors;

function ProjectCard({ project }: Props) {
  return (
    <Card className="ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]">
      <CardHeader className="flex flex-col
       space-y-2
      lg:grid">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="

        grid grid-cols-3 col-span-2 w-full 
        gap-2
        lg:flex 
        lg:flex-row

       
        ">
          {project.stack.map((p) => (
            <Badge
              key={p}
              className={`text-white font-semibold ${colors[p]} w-20 rounded mx-auto lg:mx-0`}
              style={{ backgroundColor: colors[p] }}
            >
              {p}
            </Badge>
          ))}
        </CardDescription>
        <CardAction className="mx-auto lg:mx-0">
          <Badge className="ring-2 ring-green-500 bg-transparent text-white shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]">{project.timeline}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
      </CardContent>
      
    </Card>
  );
}

export default ProjectCard;
