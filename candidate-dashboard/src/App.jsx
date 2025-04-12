import { Dashboard } from "../public/dashboard"

function App() {
 

  return (
    <>
      <header className="flex justify-between items-center p-3 bg-gray-800 text-white">
        <div className="flex items-center gap-2">
          <Dashboard width="2em" height="2em" />
          <h1 className="font-bold text-[min(2em,3.8vmin)]">Candidate Dashboard</h1>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded text-[min(0.8em,2.8vmin)]">Download CSV</button>
      </header>
    </>
  )
}

export default App
