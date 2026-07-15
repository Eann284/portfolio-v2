import React from 'react'
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
role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

function WorkCard({role, company, startDate, endDate, description, current}: Props) {
  return (
   
    <Card key={role} >
      <CardHeader>

        <div className='flex flex-row items-center justify-between'>
        <CardTitle className='font-bold text-lg'>{role}</CardTitle>
        <Badge className='bg-green-600'>
          <CircleCheckBig/>
          Internship
          </Badge>
        </div>
        <CardDescription>{company}</CardDescription>
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <p className='text-justify'>{description}</p>
      </CardContent>
      <CardFooter>
        <p className='italic font-light'>{startDate} - {endDate}</p>
      </CardFooter>
    </Card>
  )
}

export default WorkCard