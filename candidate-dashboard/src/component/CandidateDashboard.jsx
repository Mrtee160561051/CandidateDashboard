// src/components/CandidateDashboard.jsx
import {useState} from 'react'
import { LinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

const CandidateDashboard = ({ candidates, onSort, sortConfig, onFilter, onSelectCandidate }) => {
  const [filterValues, setFilterValues] = useState({
    name:'',
    role: '',
    experience: '',
    techStack: ''
  })

  const experienceCounts = candidates.reduce((acc, candidate) => {
    acc[candidate.experience] = (acc[candidate.experience] || 0) + 1
    return acc
  }, {})

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    const newFilters = { ...filterValues, [name]: value }
    setFilterValues(newFilters)
    onFilter(newFilters)
  }

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null
    return sortConfig.direction === 'ascending' ? (
      <ArrowUpIcon className="h-4 w-4 inline ml-1" />
    ) : (
      <ArrowDownIcon className="h-4 w-4 inline ml-1" />
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-row justify-between gap-2 items-center border-b-2 pb-2">
          <h2 className="font-medium text-lg ">Candidate Dashboard</h2>
          <p className="text-nowrap">Total Candidates: {candidates.length}</p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Filter by Name</label>
          <input
            type="text"
            name="name"
            value={filterValues.name}
            onChange={handleFilterChange}
            placeholder="e.g. Frontend"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Filter by Role</label>
          <input
            type="text"
            name="role"
            value={filterValues.role}
            onChange={handleFilterChange}
            placeholder="e.g. Frontend"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Filter by Experience</label>
          <select
            name="experience"
            value={filterValues.experience}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All Levels</option>
            <option value="Junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Filter by Tech</label>
          <input
            type="text"
            name="techStack"
            value={filterValues.techStack}
            onChange={handleFilterChange}
            placeholder="e.g. React"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Summary Stats */}
      <div className="flex gap-4 mb-6 text-sm">
        {Object.entries(experienceCounts).map(([level, count]) => (
          <div key={level} className="bg-gray-100 px-3 py-2 rounded">
            {level}: {count}
          </div>
        ))}
      </div>

      {/* Candidate Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => onSort('name')}
              >
                Name {getSortIcon('name')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => onSort('role')}
              >
                Role {getSortIcon('role')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => onSort('experience')}
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
          <tbody className="bg-white divide-y divide-gray-200">
            {candidates.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No candidates found
                </td>
              </tr>
            ) : (
              candidates.map(candidate => (
                <tr 
                  key={candidate.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => onSelectCandidate(candidate)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{candidate.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {candidate.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      candidate.experience === 'Junior' ? 'bg-blue-100 text-blue-800' :
                      candidate.experience === 'Mid' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {candidate.experience}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {candidate.techStack.map(tech => (
                        <span key={tech} className="bg-gray-200 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      {candidate.linkedin && (
                        <a 
                          href={candidate.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700"
                          onClick={e => e.stopPropagation()}
                        >
                          <LinkIcon className="h-5 w-5" />
                        </a>
                      )}
                      {candidate.github && (
                        <a 
                          href={candidate.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-gray-900"
                          onClick={e => e.stopPropagation()}
                        >
                          <CodeBracketIcon className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CandidateDashboard