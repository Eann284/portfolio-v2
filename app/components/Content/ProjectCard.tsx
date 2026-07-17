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
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="flex flex-row gap-2">
          {project.stack.map((p) => (
            <Badge
              key={p}
              className={`text-white font-semibold ${colors[p]} w-20 rounded`}
              style={{ backgroundColor: colors[p] }}
            >
              {p}
            </Badge>
          ))}
        </CardDescription>
        <CardAction>
          <Badge className="ring-2 ring-green-500 bg-transparent text-white shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]">{project.timeline}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
