import React from "react";
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
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

function WorkCard({
  role,
  company,
  startDate,
  endDate,
  description,
  current,
}: Props) {
  return (
    <Card key={role} className="
    ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]
  
    ">
      <CardHeader className="space-y-3">
        <div className="flex 
        
        items-center justify-between
        flex-col gap-2
        lg:flex-row

        ">
          <CardTitle className="font-bold text-lg">{role}</CardTitle>
          <Badge className="bg-green-600 ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e] text-white">
            <CircleCheckBig />
            Internship
          </Badge>
        </div>

        <CardDescription className="text-center lg:text-left">{company}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-justify">{description}</p>
      </CardContent>
      <CardFooter>
        <p className="italic font-light">
          {startDate} - {endDate}
        </p>
      </CardFooter>
    </Card>
  );
}

export default WorkCard;
