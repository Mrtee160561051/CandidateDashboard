import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  candidates: [],
  filters: {
    role: '',
    experience: '',
    techStack: '',
  },
  sortConfig: {
    key: 'name',
    direction: 'ascending',
  },
};

const candidateSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    addCandidate: (state, action) => {
      const newCandidate = { ...action.payload, id: uuidv4() };
      state.candidates.push(newCandidate);
    },
    updateCandidate: (state, action) => {
      const updatedCandidate = action.payload;
      state.candidates = state.candidates.map((candidate) =>
        candidate.id === updatedCandidate.id ? updatedCandidate : candidate
      );
    },
    deleteCandidate: (state, action) => {
      state.candidates = state.candidates.filter(
        (candidate) => candidate.id !== action.payload
      );
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setSortConfig: (state, action) => {
      state.sortConfig = action.payload;
    },
    loadCandidates: (state, action) => {
      state.candidates = action.payload;
    },
  },
});

export const {
  addCandidate,
  updateCandidate,
  deleteCandidate,
  setFilters,
  setSortConfig,
  loadCandidates,
} = candidateSlice.actions;

export default candidateSlice.reducer;