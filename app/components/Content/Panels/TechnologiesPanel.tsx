"use client";
import { techBgColors } from "../../Colors";
import { icons } from "@/app/assets/icons";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

interface Technologies {
  name: string;
}

function TechnologiesPanel() {
  const frontEndTechnologies: Technologies[] = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "TailwindCSS" },
  ];

  const backEndTechnologies: Technologies[] = [
    { name: "Flask" },
    { name: "FastAPI" },
    { name: "SQLAlchemy" },
  ];

  const databaseTechnologies: Technologies[] = [
    { name: "MySQL" },
    { name: "HeidiSQL" },
  ];

  const iotTechnologies: Technologies[] = [
    { name: "ESP32" },
    { name: "ESP32-CAM" },
    { name: "Arduino UNO" },
  ];

  const tabs = ["Front-End", "Back-End", "Database", "Internet of Things"];
  const [activeTab, setActiveTab] = useState("Front-End");

  const displayTab = () => {
    switch (activeTab) {
      case "Front-End":
        return (
          <div className="border px-4 py-2 rounded-xl">
            <h3>Front-End Development</h3>
            <div className="grid grid-cols-3 gap-x-3 gap-y-2">
              {frontEndTechnologies.map((tech) => (
                <div key={tech.name}>
                  <TechnologyCard name={tech.name} icon={icons[tech.name]} />
                </div>
              ))}
            </div>
          </div>
        );

      case "Back-End":
        return (
          <div className="border px-4 py-2 rounded-xl">
            <h3>Back-End Development</h3>
            <div className="grid grid-cols-3 gap-x-3 gap-y-2">
              {backEndTechnologies.map((tech) => (
                <div>
                  <TechnologyCard name={tech.name} icon={icons[tech.name]} />
                </div>
              ))}
            </div>
          </div>
        );
      case "Database":
        return (
          <div className="border px-4 py-2 rounded-xl">
            <h3>Database</h3>
            <div className="grid grid-cols-3 gap-x-3 gap-y-2">
              {databaseTechnologies.map((tech) => (
                <div>
                  <TechnologyCard name={tech.name} icon={icons[tech.name]} />
                </div>
              ))}
            </div>
          </div>
        );

      case "Internet of Things":
        return (
          <div className="border px-4 py-2 rounded-xl">
            <h3>Internet Of Things</h3>
            <div className="grid grid-cols-3 gap-x-3 gap-y-2">
              {iotTechnologies.map((tech) => (
                <div>
                  <TechnologyCard name={tech.name} icon={icons[tech.name]} />
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section className="relative flex flex-col gap-5 p-4 select-none">
      <h1 className="text-xl">Skills</h1>

      <nav>
        <Tabs>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger
                value={tab}
                key={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </nav>

      {displayTab()}
    </section>
  );
}

interface TechnologyCardProps {
  name: string;
  icon: string;
}

const TechnologyCard = ({ name, icon }: TechnologyCardProps) => {
  const bgClass = techBgColors[name] || "bg-gray-500";

  return (
    <Item
      variant="outline"
      role="listitem"
      className={`px-4 py-1 m-1 rounded-lg font-semibold text-md text-center ${bgClass} flex flex-row items-center gap-5`}
    >
      <i className={`${icon} text-xl`}></i>
      <p>{name}</p>
    </Item>
  );
};

export default TechnologiesPanel;
