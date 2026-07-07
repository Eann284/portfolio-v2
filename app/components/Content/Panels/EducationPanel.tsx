
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
    <section className="flex flex-col gap-5 p-4">

      <h1 className="mx-auto text-3xl">Education</h1>

      <div>
        <div className="flex flex-row gap-1 items-baseline">
          <h1 className="text-xl">{college.school}</h1>
          <span className="text-sm italic">{college.year}</span>
        </div>
        <h1>{college.course}</h1>
      </div>

      <div>
        <div className="flex flex-row gap-1 items-baseline">
          <h1 className="text-xl">{seniorHighSchool.school}</h1>
          <span className="text-sm italic">{seniorHighSchool.year}</span>
        </div>
        <h1>{seniorHighSchool.strand}</h1>
      </div>

      <div>
        <div className="flex flex-row gap-1 items-baseline">
          <h1 className="text-xl">{juniorHighSchool.school}</h1>
          <span className="text-sm italic">{juniorHighSchool.year}</span>
        </div>
      </div>
    </section>
  )
}

export default EducationPanel