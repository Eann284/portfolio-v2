import { Guitar, Bike, LucideIcon } from "lucide-react";
import { techBgColors } from "../../Colors";
import TechnologiesPanel from "./TechnologiesPanel";
import EducationPanel from "./EducationPanel";


interface LanguageTypes {
  language: string;
  mastery: number;
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
  `

  // languages
  // stats? project count, years of experience, etc.  

  const languages: LanguageTypes[] = [
  {language: 'English', mastery: 100},
  {language: 'Filipino', mastery: 100},
  {language: 'Korean', mastery: 25},
  ]

  const hobbies:HobbiesTypes[] = [
    {hobby: 'Playing Instruments', icon: Guitar},
    {hobby: 'Cycling', icon: Bike},
  ]


  return (
    <section className="flex flex-col gap-2 p-4">

    {/* row 1 */}
      <div className="grid grid-cols-[65%_35%] gap-5 px-4">
        <h1 className="text-xl">About Me</h1>
        <h1 className="text-xl">Languages</h1> 
      </div>

    {/* row 2 */}
      <div className="grid grid-cols-[65%_35%] gap-5 px-4">
        <div>
          <p className="text-justify">{personalInformation}</p>
      </div>


    {/* row 3 */}
      <div className="">   
          {
            languages.map(lang=> (
              <LanguageCard language={lang.language} key={lang.language} mastery={lang.mastery}/>
            ))
          }
      </div>
      </div>

    {/* row 4 */}
      <div className="h-65">
        <TechnologiesPanel/>
      </div>
    
    {/* row 5 */}
      <div className="h-full">
        <EducationPanel/>
      </div>

    </section>
  )
}

const LanguageCard = ({language, mastery}: LanguageTypes) => {
  return(
    <div className="w-50">
      <h1>{language}</h1>
      <div className={`h-2 bg-green-200`} style={{width: `${mastery}%`}}/>
    </div>
  )
}

const  HobbiesCard = ({hobby, icon: Icon}: HobbiesTypes) => {
  return(
    <div className="w-40 flex flex-row items-center w-50 gap-5">
      <Icon size={24}/>
      <span>{hobby}</span>
    </div>
  )
}


interface TechnologyCardProps {
  name: string;
  icon: string;
}

const TechnologyCard = ({ name, icon}: TechnologyCardProps) => {
  const bgClass = techBgColors[name] || 'bg-gray-500'
  
  return (
    <div className={`px-4 py-2 m-1 rounded-lg font-semibold text-lg text-center ${bgClass} flex flex-row items-center gap-5`}>
      <i className={`${icon} text-3xl`}></i>
      <p>{name}</p>
    </div>
  )
}
export default AboutMePanel