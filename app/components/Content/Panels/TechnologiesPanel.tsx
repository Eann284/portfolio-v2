import { techBgColors } from "../../Colors";
import { icons } from "@/app/assets/icons";

interface Technologies {
  name: string;
}



function TechnologiesPanel() {

  const frontEndTechnologies: Technologies[] = [
  { name: "HTML"},
  { name: "CSS" },
  { name: "JavaScript"},
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TailwindCSS" },
]

const backEndTechnologies: Technologies[] = [
  { name: "Flask" },
  { name: "FastAPI" },
  { name: "SQLAlchemy" },
]

const databaseTechnologies: Technologies[] = [
  { name: "MySQL"},
  { name: "HeidiSQL" },
]

const iotTechnologies: Technologies[] = [
  { name: 'ESP32' },
  { name: 'ESP32-CAM' },
  { name: 'Arduino UNO' },
]


  return (
    <section className="relative flex flex-col gap-5 p-4">

      <h1 className="mx-auto text-3xl">Technologies and Tools</h1>


      <div className='border px-4 py-2 rounded-xl'>
        <h3>Front-End Development</h3>
        <div className='grid grid-cols-3 gap-x-3 gap-y-2'>
          {
            frontEndTechnologies.map((tech) => (
              <div>
                <TechnologyCard name={tech.name} icon={icons[tech.name]}/>
              </div>
            ))
          }
        </div>
      </div>

      <div className='border px-4 py-2 rounded-xl'>
        <h3>Back-End Development</h3>
        <div className='grid grid-cols-3 gap-x-3 gap-y-2'>
          {
            backEndTechnologies.map((tech) => (
              <div>
                <TechnologyCard name={tech.name} icon={icons[tech.name]}/>
              </div>
            ))
          }
        </div>
      </div>
      
      <div className='border px-4 py-2 rounded-xl'>
        <h3>Database</h3>
        <div className='grid grid-cols-3 gap-x-3 gap-y-2'>
          {
            databaseTechnologies.map((tech) => (
              <div>
                <TechnologyCard name={tech.name} icon={icons[tech.name]}/>
              </div>
            ))
          }
        </div>
      </div>

      <div className='border px-4 py-2 rounded-xl'>
        <h3>Internet Of Things</h3>
        <div className='grid grid-cols-3 gap-x-3 gap-y-2'>
          {
            iotTechnologies.map((tech) => (
              <div>
                <TechnologyCard name={tech.name} icon={icons[tech.name]}/>
              </div>
            ))
          }
        </div>
      </div>


      
    </section>
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

export default TechnologiesPanel