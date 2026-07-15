import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import { Badge } from "@/components/ui/badge"

import { GraduationCap } from "lucide-react"

import Image from "next/image"

function EducationPanel() {

  // Name of school
  // Years
  // Course/Strand SHS

  const college = {
      school: 'Don Bosco Technical College',
      year: '2022-2026',
      course: 'BS Information Technology'
    }

  const seniorHighSchool = {
    school: 'Lourdes School of Mandaluyong',
    year: '2016-2022',
    strand: 'Science, Technology, Engineering & Mathematics (STEM)'
  }



  return (
    <section className="flex flex-col gap-5 px-4 cursor-default">
      <h1 className="text-xl">Education</h1>

    
      <ItemGroup className="border rounded-lg p-4">
        <Item className="border bg-blue-200">
          <ItemMedia>
            <Image src={'/images/DBTC_LOGO.png'}
            width={60} height={60} className="object-cover"alt="dbtc"/>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-lg">
              {college.school}
              
              <Badge variant="secondary">
                <GraduationCap data-icon="inline-start"/>
                <span>{college.year}</span>
              </Badge>
            </ItemTitle>

            <ItemDescription>
              {college.course}
            </ItemDescription>
          </ItemContent>

        </Item>

        <Item className="border-3 bg-blue-200">
          <ItemMedia>
            <Image src={'/images/LSM_LOGO.png'}
            width={60} height={60} className="object-cover"alt="dbtc"/>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-lg">
              {seniorHighSchool.school}
              <Badge variant="secondary">
                <GraduationCap data-icon="inline-start"/>
                <span>{seniorHighSchool.year}</span>
              </Badge>
            </ItemTitle>

            <ItemDescription>
              {seniorHighSchool.strand}
            </ItemDescription>
          </ItemContent>

          

        </Item>

       
      </ItemGroup>


      
    </section>
  )
}

export default EducationPanel