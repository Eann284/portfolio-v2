"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Tab = "About Me" | "Work Experience" | "Projects" | "Contact";

interface Props {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

function PanelHeader({ activeTab, setActiveTab }: Props) {
  const tabs: Tab[] = ["About Me", "Work Experience", "Projects", "Contact"];

  return (
    <nav className="flex justify-center items-center">
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
  );
}

export default PanelHeader;
