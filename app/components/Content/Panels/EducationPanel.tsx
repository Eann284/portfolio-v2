
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
    year: '2020-2022',
    strand: 'Science, Technology, Engineering & Mathematics (STEM)'
  }

  const juniorHighSchool = {
    school: 'Lourdes School of Mandaluyong',
    year: '2016-2020'
  }
  

  return (
    <section className="relative flex flex-col gap-5 p-4">

      <h1 className="mx-auto text-3xl">Education</h1>


      <div className="relative border p-4 space-y-20">

        {/* outside line */}
        <div className="absolute left-[13px] w-1 h-full top-0 bg-gray-200"></div>

        <div className="relative pl-3">

          <div className="absolute -left-[9px] bg-red-400 w-4 h-4 top-1.5 z-10 rounded-full"></div>

            <div className="flex flex-row gap-1 items-baseline">
              <h1 className="text-xl">{college.school}</h1>
              <span className="text-sm italic">{college.year}</span>
            </div>
            <h1>{college.course}</h1>
        </div>

        <div className="relative pl-3">

          <div className="absolute -left-[9px] bg-red-400 w-4 h-4 top-1.5 z-10 rounded-full"></div>

          <div className="flex flex-row gap-1 items-baseline">
            <h1 className="text-xl">{seniorHighSchool.school}</h1>
            <span className="text-sm italic">{seniorHighSchool.year}</span>
          </div>
          <h1>{seniorHighSchool.strand}</h1>
        </div>

        <div className="relative pl-3">

          <div className="absolute -left-[9px] bg-red-400 w-4 h-4 top-1.5 z-10 rounded-full"></div>

          <div className="flex flex-row gap-1 items-baseline">
            <h1 className="text-xl">{juniorHighSchool.school}</h1>
            <span className="text-sm italic">{juniorHighSchool.year}</span>
          </div>
        </div>
      </div>


      
    </section>
  )
}

export default EducationPanel