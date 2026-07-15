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
    <Card>
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
          <Badge>{project.timeline}</Badge>
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
