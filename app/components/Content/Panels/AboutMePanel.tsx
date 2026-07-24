import { Guitar, Bike, LucideIcon } from "lucide-react";
import { techBgColors } from "../../Colors";
import TechnologiesPanel from "./TechnologiesPanel";
import EducationPanel from "./EducationPanel";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

import { Progress } from "@/components/ui/progress";

interface LanguageTypes {
  language: string;
  mastery: number;
  description: string;
}

interface HobbiesTypes {
  hobby: string;
  icon: LucideIcon;
}

function AboutMePanel() {
  const personalInformation = `
      Hi! I am Eann, an Information Technology graduate of Don Bosco Technical College with a passion for Front-End Development.
      I started programming in high school at Lourdes School of Mandaluyong. I chose Computer as my TLE Elective subject for years 9 & 10,
      where I was introduced to various programming languages, and eventually led to me studying in DBTC and gaining an interest 
      in developing User Interfaces.
  `;

  // languages
  // stats? project count, years of experience, etc.

  const languages: LanguageTypes[] = [
    {
      language: "English",
      mastery: 100,
      description: `I was taught the English language 
    since I was a child. Growing up, I constantly used English to communicate with others until I became fluent.`,
    },

    {
      language: "Filipino",
      mastery: 100,
      description: `As a natural born Filipino, I am fluent in my country's language, mainly Tagalog, as I use it interchangeably
    with English. I only know Tagalog as it is the main dialect in my province.`,
    },
    {
      language: "Korean",
      mastery: 25,
      description: `I started to learn Korean just for fun and I know some of the basics. From the writing system to a handful of words in my
    vocabulary, although my overall conversation skills are not as sharp.`,
    },
  ];

  const hobbies: HobbiesTypes[] = [
    { hobby: "Playing Instruments", icon: Guitar },
    { hobby: "Cycling", icon: Bike },
  ];

  return (
    <section className=" grid 
  grid-cols-1 
  lg:gap-2 
  p-4
  w-full
  max-w-full
  overflow-hidden
    ">
      {/* row 1 */}
      <div className="
      grid 
      lg:grid-cols-[65%_35%] gap-5 px-4">
        <h1 className="text-xl">About Me</h1>
      </div>

      {/* row 2 */}
      <div className="grid 
      
      grid-cols-1 

      lg:grid-cols-[65%_35%] gap-5 px-4

      ">
        <div>
          <p className="text-justify">{personalInformation}</p>
        </div>

        {/* row 3 */}
        <div className="flex flex-col gap-3 px-4">

          <div className="grid grid-cols-1 gap-2">
            <h1 className="text-xl">Languages</h1>

          {languages.map((lang) => (
            <div
              className="grid grid-cols-[auto_1fr] items-center gap-4"
              key={lang.language}
            >
              <LanguageCard
                language={lang.language}
                key={lang.language}
                mastery={lang.mastery}
                description={lang.description}
              />
              <Progress value={lang.mastery}/>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* row 4 */}
      <div className="min-h-[300px]">
        <TechnologiesPanel />
      </div>

      {/* row 5 */}
      <div className="h-full">
        <EducationPanel />
      </div>
    </section>
  );
}

const LanguageCard = ({ language, mastery, description }: LanguageTypes) => {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={10}
        closeDelay={100}
        render={<Button className="w-20 ">{language}</Button>}
        className='bg-[#1a0808] ring-2 ring-green-500 shadow-[0_0_8px_#58cc02,0_0_16px_#58cc02] hover:shadow-[0_0_12px_#58cc02,0_0_24px_#58cc02,0_0_40px_#58cc02] hover:ring-3 transition duration-200 text-white font-semibold'
      />
      <HoverCardContent className="text-justify bg-[#58cc02]">
        {description}
      </HoverCardContent>
    </HoverCard>
  );
};

interface TechnologyCardProps {
  name: string;
  icon: string;
}

const TechnologyCard = ({ name, icon }: TechnologyCardProps) => {
  const bgClass = techBgColors[name] || "bg-gray-500";

  return (
    <div
      className={`flex flex-row 
        px-4 py-2 m-1 rounded-lg font-semibold text-sm text-center ${bgClass} items-center gap-5
        `}
    >
      <i className={`${icon} text-3xl`}></i>
      <p>{name}</p>
    </div>
  );
};
export default AboutMePanel;
