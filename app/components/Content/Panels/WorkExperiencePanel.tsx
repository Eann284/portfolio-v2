import React from "react";
import WorkCard from "../WorkCard";

interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

function WorkExperiencePanel() {
  const experience: Experience[] = [
    {
      role: "Operations Intern",
      company: "Prestige Interactive Enterprise OPC",
      startDate: "January 21, 2026",
      endDate: "April 21, 2026",
      description: `

      As an Intern for the Operations department, I assisted in monitoring, maintaining, and troubleshooting kiosk units
      via remote access, along with a few other tasks involving: SQL Queries, Windows OS tools and configurations, UI Development, and 
      Program Installation.
      
      `,
      current: false,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center mb-10">Work Experience</h1>

      <section className="
      grid
      grid-cols-1
      lg:grid-cols-2 gap-6">
        {experience.map((e) => (
          <WorkCard
            role={e.role}
            company={e.company}
            startDate={e.startDate}
            endDate={e.endDate}
            description={e.description}
            current={e.current}
          />
        ))}
      </section>
    </div>
  );
}

export default WorkExperiencePanel;
