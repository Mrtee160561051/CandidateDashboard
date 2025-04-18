import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const storedCandidates = JSON.parse(localStorage.getItem('candidates')) || [];
const initialState = {
  candidates: [...storedCandidates],
  filters: {
    name:'',
    role: '',
    experience: '',
    techStack: '',
  },
  sortConfig: {
    key: 'name',
    direction: 'ascending',
  },
  currentPage: 1
};

const candidateSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    addCandidate: (state, action) => {
      const newCandidate = { ...action.payload, id: uuid() };
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
    resetCurrentPage:(state) => {
      state.currentPage = 1;
    },
    updateCurrentPage:(state, action)=>{
      state.currentPage = action.payload
    }
  },
});

export const {
  addCandidate,
  updateCandidate,
  deleteCandidate,
  setFilters,
  setSortConfig,
  loadCandidates,
  resetCurrentPage,
  updateCurrentPage
} = candidateSlice.actions;

export default candidateSlice.reducer;