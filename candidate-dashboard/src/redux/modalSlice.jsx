// src/redux/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  candidate: null,
  isEditing: false,
  editData: null
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.candidate = action.payload;
      state.isEditing = false;
      state.editData = { ...action.payload };
    },
    closeModal: () => {
      return initialState;
    },
    startEditing: (state) => {
      state.isEditing = true;
    },
    cancelEditing: (state) => {
      state.isEditing = false;
      state.editData = { ...state.candidate };
    },
    updateEditData: (state, action) => {
      const { name, value } = action.payload;
      state.editData[name] = value;
    },
    updateTechStack: (state, action) => {
      state.editData.techStack = action.payload.split(',').map(tech => tech.trim());
    }
  }
});

export const {
  openModal,
  closeModal,
  startEditing,
  cancelEditing,
  updateEditData,
  updateTechStack
} = modalSlice.actions;

export default modalSlice.reducer;