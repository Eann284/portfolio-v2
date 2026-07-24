import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

import { Badge } from "@/components/ui/badge";

import { GraduationCap } from "lucide-react";

import Image from "next/image";

function EducationPanel() {
  const college = {
    school: "Don Bosco Technical College",
    year: "2022-2026",
    course: "BS Information Technology",
  };

  const seniorHighSchool = {
    school: "Lourdes School of Mandaluyong",
    year: "2016-2022",
    strand: "Science, Technology, Engineering & Mathematics (STEM)",
  };

  return (
    <section className="flex flex-col gap-5 px-4 cursor-default ">
      <h1 className="text-xl">Education</h1>

      <ItemGroup className="flex 
      
   
      lg:flex-row
      
      
      rounded-lg p-4 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]">
        <Item className="
        ring-2 
        bg-[#0a1a0a]
        items-baseline 
        ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]
        flex flex-col items-center
        lg:flex-row items-baseline     
        ">
          <ItemMedia className="bg-white p-1 rounded-full mx-auto">
            <Image
              src={"/images/DBTC_LOGO.png"}
              width={100}
              height={100}
              className="object-cover
            
              "
              alt="dbtc"
            />
          </ItemMedia>
          <ItemContent className="mx-auto">
            <ItemTitle className="
            text-xs
            mx-auto
            lg:text-lg
            lg:mx-0
            ">
              {college.school}

            </ItemTitle>

            <ItemDescription className="mx-auto lg:mx-0 lg:text-left">{college.course}</ItemDescription>


              <Badge variant="secondary" className="
              ring-2 ring-green-400 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e] bg-green-800
              mx-auto
              lg:mx-0
              ">
                <GraduationCap data-icon="inline-start" />
                <span>{college.year}</span>
              </Badge>
          </ItemContent>
        </Item>

        <Item className="
        ring-2 
        bg-[#0a1a0a]
        items-baseline 
        ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]
        flex flex-col items-center
        lg:flex-row items-baseline 
        ">
          <ItemMedia className="
          bg-white p-1 rounded-full
          mx-auto
          ">
            <Image
              src={"/images/LSM_LOGO.png"}
              width={100}
              height={100}
              className="object-cover"
              alt="dbtc"
            />
          </ItemMedia>
          <ItemContent className="mx-auto">
            <ItemTitle className="
            text-xs
            mx-auto
            lg:text-lg
            lg:mx-0
            ">
              {seniorHighSchool.school}
            </ItemTitle>

            <ItemDescription className="text-center lg:text-left">{seniorHighSchool.strand}</ItemDescription>

            <Badge variant="secondary" className="
            ring-2 ring-green-400 
            shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e] 
            bg-green-800
            mx-auto

            lg:mx-0

            ">
                <GraduationCap data-icon="inline-start" />
                <span>{seniorHighSchool.year}</span>
              </Badge>
          </ItemContent>
        </Item>
      </ItemGroup>
    </section>
  );
}

export default EducationPanel;
