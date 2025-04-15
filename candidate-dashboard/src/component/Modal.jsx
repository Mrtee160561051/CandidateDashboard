import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeModal,
  startEditing,
  cancelEditing,
  updateEditData,
  updateTechStack,
} from '../redux/modalSlice';

import {
  updateCandidate,
  deleteCandidate
} from '../redux/candidateSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, candidate, isEditing, editData } = useSelector(state => state.modal);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateEditData({ name, value }));
  };

  const handleTechChange = (e) => {
    dispatch(updateTechStack(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCandidate(editData));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-xl font-semibold">
            {isEditing ? 'Edit Candidate' : 'Candidate Details'}
          </h3>
          <button onClick={() => dispatch(closeModal())} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        
        {isEditing ? (
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Job Role</label>
                <input
                  type="text"
                  name="role"
                  value={editData.role}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  name="linkedin"
                  value={editData.linkedin}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">GitHub URL</label>
                <input
                  type="url"
                  name="github"
                  value={editData.github}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Experience Level</label>
                <select
                  name="experience"
                  value={editData.experience}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="Junior">Junior</option>
                  <option value="Mid">Mid</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  value={editData.techStack.join(', ')}
                  onChange={handleTechChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => dispatch(cancelEditing())}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{candidate.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-medium">{candidate.role}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-medium">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    candidate.experience === 'Junior' ? 'bg-blue-100 text-blue-800' :
                    candidate.experience === 'Mid' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {candidate.experience}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Links</p>
                <div className="flex gap-2">
                  {candidate.linkedin && (
                    <a 
                      href={candidate.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      LinkedIn
                    </a>
                  )}
                  {candidate.github && (
                    <a 
                      href={candidate.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Tech Stack</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {candidate.techStack.map(tech => (
                    <span key={tech} className="bg-gray-200 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => dispatch(deleteCandidate(candidate.id))}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => dispatch(startEditing())}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal