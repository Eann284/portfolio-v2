import React from 'react'

interface Technologies {
  name: string;
  color: string;
  // icon ??
}



function TechnologiesPanel() {

  const frontEndTechnologies: Technologies[] = [
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React.js", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TailwindCSS", color: "#06B6D4" },
]

const backEndTechnologies: Technologies[] = [
  { name: "Flask", color: "#000000" },
  { name: "FastAPI", color: "#009688" },
  { name: "SQLAlchemy", color: "#4B8BBE" },
]

const databaseTechnologies: Technologies[] = [
  { name: "MySQL", color: "#4479A1" },
  { name: "HeidiSQL", color: "#9B59B6" },
]

const iotTechnologies: Technologies[] = [
  { name: 'ESP32', color: "#E7352C" },
  { name: 'ESP32-CAM', color: "#E7352C" },
  { name: 'Arduino UNO', color: "#00878F" },
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
                <TechnologyCard name={tech.name}/>
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
                <TechnologyCard name={tech.name}/>
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
                <TechnologyCard name={tech.name}/>
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
                <TechnologyCard name={tech.name}/>
              </div>
            ))
          }
        </div>
      </div>


      
    </section>
  )
}

export const techBgColors: Record<string, string> = {
  'HTML': 'bg-[#E34F26]',
  'CSS': 'bg-[#1572B6]',
  'JavaScript': 'bg-[#F7DF1E]',
  'React.js': 'bg-[#61DAFB]',
  'Next.js': 'bg-[#000000] text-white',
  'TailwindCSS': 'bg-[#06B6D4]',
  'Python': 'bg-[#3776AB]',
  'Flask': 'bg-[#000000] text-white',
  'FastAPI': 'bg-[#009688]',
  'SQLAlchemy': 'bg-[#4B8BBE]',
  'MySQL': 'bg-[#4479A1]',
  'HeidiSQL': 'bg-[#9B59B6]',
  'ESP32': 'bg-[#E7352C]',
  'ESP32-CAM': 'bg-[#E7352C]',
  'Arduino UNO': 'bg-[#00878F]',
}

const TechnologyCard = ({ name }: { name: string }) => {
  const bgClass = techBgColors[name] || 'bg-gray-500'
  
  return (
    <div className={`px-4 py-2 border m-1 rounded text-center ${bgClass}`}>
      {name}
    </div>
  )
}

export default TechnologiesPanel