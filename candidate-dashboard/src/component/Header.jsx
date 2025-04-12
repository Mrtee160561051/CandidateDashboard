import React from 'react'
import { Dashboard } from "../../public/dashboard"
function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-1 bg-gray-800 text-white">
        <div className="flex items-center gap-2">
          <Dashboard width="4em" height="4em" />
          <h1 className="font-bold text-xl">CANDIDATE DASHBOARD</h1>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded text-xs">Download CSV</button>
    </header>
  )
}

export default Header
