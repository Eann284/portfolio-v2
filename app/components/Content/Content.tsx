'use client';

import { useState } from 'react'
import PanelHeader from './PanelHeader'
import AboutMePanel from './Panels/AboutMePanel';
import EducationPanel from './Panels/EducationPanel';
import WorkExperiencePanel from './Panels/WorkExperiencePanel';
import TechnologiesPanel from './Panels/TechnologiesPanel';
import ProjectsPanel from './Panels/ProjectsPanel';
import ContactPanel from './Panels/ContactPanel';

type Tab = 'About Me' | 'Education' | 'Work Experience' | 'Technologies' | 'Projects' | 'Contact'


function Content() {

    const [activeTab, setActiveTab] = useState<Tab>('Contact'); // todo: change back to ABOUT ME

    const displayTab = () => {

        switch(activeTab) {
            case 'About Me':
                return <AboutMePanel />
            case 'Education':
                return <EducationPanel />
            case 'Work Experience':
                return <WorkExperiencePanel />
            case 'Technologies':
                return <TechnologiesPanel />
            case 'Projects':
                return <ProjectsPanel />
            case 'Contact':
                return <ContactPanel />

        }
    }

  return (
    <main>
        <PanelHeader activeTab={activeTab} setActiveTab={setActiveTab}/>

        {/* call function to display active tab */}
        {displayTab()}
    </main>
  )
}

export default Content