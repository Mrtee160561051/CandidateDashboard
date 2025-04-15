import React from 'react'
import { Dashboard } from "../../public/dashboard"
function Header({candidates}) {
  const convertToCSV = (data) => {
    if (!data.length) return '';
  
    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
      headers.map((field) => {
        let value = row[field];
  
        // If it's an array (like techStack), join it
        if (Array.isArray(value)) value = value.join(', ');
  
        // Escape quotes
        if (typeof value === 'string') {
          value = `"${value.replace(/"/g, '""')}"`;
        }
  
        return value;
      }).join(',')
    );
  
    return [headers.join(','), ...rows].join('\n');
  };
  const handleDownloadCSV = () => {
    const csv = convertToCSV(candidates); 
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'candidates.csv');
    link.click();
  };  

  return (
    <header className="flex justify-between items-center px-3 py-1 bg-gray-800 text-white">
        <div className="flex items-center gap-2">
          <Dashboard width="4em" height="4em" />
          <h1 className="font-bold text-xl">CANDIDATE DASHBOARD</h1>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded text-xs" onClick={handleDownloadCSV}>Download CSV</button>
    </header>
  )
}

export default Header
