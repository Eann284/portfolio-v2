'use client';

import { useState } from 'react'

type Tab = 'About Me' | 'Education' | 'Work Experience' | 'Technologies' | 'Projects' | 'Contact'

interface Props {
    activeTab: Tab
    setActiveTab: (tab: Tab) => void
}

function PanelHeader({activeTab, setActiveTab}: Props) {

    const tabs: Tab[] = [
        'About Me',
        'Education',
        'Work Experience',
        'Technologies',
        'Projects',
        'Contact'
    ]

  return (
    <nav className='flex justify-center items-center'>
        <ul className='flex flex-row gap-5'>
            {tabs.map((tab) => (
                <li key={tab}>
                    <button className={activeTab === tab ? 'bg-green-100' : ''} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default PanelHeader