'use client';

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Tab = 'About Me' | 'Work Experience' | 'Projects' | 'Contact'

interface Props {
    activeTab: Tab
    setActiveTab: (tab: Tab) => void
}

function PanelHeader({activeTab, setActiveTab}: Props) {

    const tabs: Tab[] = [
        'About Me',
        'Work Experience',
        'Projects',
        'Contact'
    ]

  return (
    <nav className='flex justify-center items-center'>
        {/* <ul className='flex flex-row gap-5'>
            {tabs.map((tab) => (
                <li key={tab}>
                    <button className={activeTab === tab ? 'bg-green-100' : ''} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                </li>
            ))}
        </ul> */}
            <Tabs>
                <TabsList>
                  {
                    tabs.map(tab=>(
                        <TabsTrigger value={tab} key={tab} onClick={() => setActiveTab(tab)}>
                          {tab}
                        </TabsTrigger>
                    ))
                  }
                </TabsList>
            </Tabs>
    </nav>
  )
}

export default PanelHeader