// components/Header/Header.tsx
import React from 'react'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-center bg-[#0a0a0f]">
      <h1 className="text-xl text-center text-green-400 [text-shadow:0_0_10px_#22c55e,0_0_20px_#22c55e]
      ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e] px-4 rounded-2xl">eann.dev</h1>
    </header>
  )
}

export default Header