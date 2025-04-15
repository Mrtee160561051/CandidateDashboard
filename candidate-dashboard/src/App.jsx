import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCandidate,
  updateCandidate,
  deleteCandidate,
  setFilters,
  setSortConfig,
  loadCandidates,
} from './redux/candidateSlice';
import CandidateDashboard from './component/CandidateDashboard';
import Header from './component/Header';
import Form from './component/Form';
import Modal from './component/Modal';

function App() {
  const dispatch = useDispatch();
  const { candidates, filters, sortConfig } = useSelector((state) => state.candidates);
  const [selectedCandidate, setSelectedCandidate] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  // Load candidates from localStorage on initial render
  useEffect(() => {
    const savedCandidates = localStorage.getItem('candidates');
    if (savedCandidates) {
      dispatch(loadCandidates(JSON.parse(savedCandidates)));
    }
  }, [dispatch]);

  // Save candidates to localStorage when they change
  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates));
  }, [candidates]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    dispatch(setSortConfig({ key, direction }));
  };

  const sortedCandidates = [...candidates].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredCandidates = sortedCandidates.filter(candidate => {
    const { name, role, experience, techStack } = filters;
    
    return (
      (!name || candidate.name.toLowerCase().includes(name.toLowerCase())) &&
      (!role || candidate.role.toLowerCase().includes(role.toLowerCase())) &&
      (!experience || candidate.experience.toLowerCase() === experience.toLowerCase()) &&
      (!techStack || candidate.techStack.some(tech => 
        tech.toLowerCase().includes(techStack.toLowerCase())
      ))
    );
  });
  

  return (
    <>
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 text-sm">
        <Form addCandidate={(candidate) => dispatch(addCandidate(candidate))} />
        <section className="lg:col-span-5 bg-white p-4 rounded shadow-2xl">
          <CandidateDashboard
            candidates={filteredCandidates}
            onSort={handleSort}
            sortConfig={sortConfig}
            onFilter={(filters) => dispatch(setFilters(filters))}
            onSelectCandidate={(candidate) => {
              setSelectedCandidate(candidate);
              setShowModal(true);
            }}
          />
        </section>
        {showModal && selectedCandidate && (
          <Modal
            candidate={selectedCandidate}
            onClose={() => setShowModal(false)}
            onUpdate={(updatedCandidate) => dispatch(updateCandidate(updatedCandidate))}
            onDelete={(id) => dispatch(deleteCandidate(id))}
          />
        )}
      </main>
    </>
  );
}

export default App;