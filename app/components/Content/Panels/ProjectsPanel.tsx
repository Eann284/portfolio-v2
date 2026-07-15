import ProjectCard from "../ProjectCard";

export interface Projects {
  title: string;
  timeline: string;
  stack: Array<string>;
  description: string;
}

function ProjectsPanel() {
  const projects: Projects[] = [
    {
      title:
        "PlasTrack: IoT and Web-Based Plastic Bottle Collection and Point-Tracking System",
      timeline: "January 2025 - November 2025",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "MySQL",
        "ESP32",
        "ESP32-CAM",
      ],
      description: `PlasTrack turns a physical user input into a digital points. 
      Utilizing Internet of Things, the system uses an ESP32 and an ESP32-CAM to capture an image of the user's input:
      a plastic bottle. The web dashboard, built with Flask and MySQL, lets its users keep track of how many points they have.
      Primarily catered towards a High School as my team's benefactor, the digital points can be exchanged for school supplies,
      encouraging students to recycle plastic bottles more often.`,
    },
  ];

  return (
    <section className="relative flex flex-col gap-5 p-4 overflow-auto">
      <h1 className="mx-auto text-3xl">Projects</h1>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
}

export default ProjectsPanel;
