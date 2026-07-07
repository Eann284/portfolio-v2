import React from 'react'


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
    <div className='relative border w-full h-70 rounded-lg p-4 flex flex-col ' 
    
    key={role}>

            <div className={`${current ? 'bg-amber-300': 'bg-red-300'} w-10 h-10 mx-auto rounded-full`}></div>

            <h1 className='text-2xl text-center'>{role}</h1>
            <h1 className='text-sm text-center'>{company}</h1>


            <h1>{description}</h1>


            <h1 className='text-sm italic mt-auto'>{startDate} - {endDate}</h1>
    </div>
  )
}

export default WorkCard