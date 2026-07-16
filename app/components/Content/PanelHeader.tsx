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
        <TabsList className="gap-2 ">
          {tabs.map((tab) => (
            <TabsTrigger
              value={tab}
              key={tab}
              onClick={() => setActiveTab(tab)} 
              className="dark:data-active:bg-[#080f0e] dark:data-active:text-green-400 dark:data-active:ring dark:data-active:ring-green-500 dark:data-active:shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e] dark:data-active:hover:shadow-[0_0_12px_#22c55e,0_0_24px_#22c55e,0_0_40px_#22c55e] dark:data-active:hover:ring-3 dark:data-active:transition dark:data-active:duration-200"            
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
