import Header from "./component/Header"
import Form from "./component/Form"
import { useState, useEffect } from "react"
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'
function App() {
  const [candidates, setCandidates] = useState([])
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'ascending'
  })

  
  // Load from localStorage on initial render
  useEffect(()=>{
    const savedChange = localStorage.getItem('candidates')
    if(savedChange){
      setCandidates(JSON.parse(savedChange))
    }
  },[])
  // Save to localStorage when candidates change
  useEffect(() => { 
    localStorage.setItem('candidates',JSON.stringify(candidates))
  }, [candidates]); 
  
  //Determine the sorting order
  const handleSort = (key) => { 
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }     
    setSortConfig({ key, direction })
  }
  
  //Determine where the icon should be placed or not
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null
    return sortConfig.direction === 'ascending' ? (
      <ArrowUpIcon className="h-4 w-4 inline ml-1" />
    ) : (
      <ArrowDownIcon className="h-4 w-4 inline ml-1" />
    )
  }
  return (
    <>
      <Header/>
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 text-sm">
        <Form/>
        <section className="lg:col-span-5 bg-white p-4 rounded shadow-2xl">
             <article>
                {/* Score */}
                <div className="flex flex-row justify-between gap-2 items-center border-b-2 pb-2">
                  <h2 className="font-medium text-lg ">Candidate Dashboard</h2>
                  <p className="text-nowrap">Total Candidates: {candidates.length}</p>
                </div>

                {/* Filters */}
                <div className="flex flex-row justify-between flex-wrap md:flex-nowrap gap-2 items-center pb-2 pt-2">
                  <div>
                    <label htmlFor="name" className="font-medium">Filter by Name:</label>
                    <input type="text" name="name" placeholder="e.g John Doe" className="border p-2 rounded w-full border-neutral-200"/>
                  </div>
                  <div>
                    <label htmlFor="filter" className="font-medium">Filter by Role:</label>
                    <input type="text" name="filter" placeholder="e.g Backend" className="border p-2 rounded w-full border-neutral-200"/>
                  </div>
                  <div>
                    <label htmlFor="experience" className="font-medium">Filter by Experience:</label>
                    <select name="experience" className="border p-2 rounded w-full bg-[#ddd9d9] border-neutral-200">
                      <option value="">Select Experience Level</option>
                      <option value="junior">Junior</option>
                      <option value="mid">Mid</option>
                      <option value="senior">Senior</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="tech" className="font-medium">Filter by Tech:</label>
                    <input type="text" name="tech" placeholder="e.g React" className="border p-2 rounded w-full border-neutral-200"/>
                  </div>
                </div>
             </article>
              
              {/* Summary */}
             <article className="flex flex-col gap-2">

             </article>
              
              {/* Candidates table*/}
             <article className="overflow-x-auto"> 
              <table className="min-w-full divide-y divide-neutral-200">
                 <thead className="bg-neutral-100">
                    <tr>
                      <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort('name')}
                      >
                        Name {getSortIcon('name')}
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort('role')}
                      >
                        Role {getSortIcon('role')}
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort('experience')}
                      >
                        Experience {getSortIcon('experience')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tech Stack
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Links
                      </th>
                    </tr>
                 </thead>
              </table>
            </article>
        </section>
      </main>
    </>
  )
}

export default App
