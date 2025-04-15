import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData:{
    name: '',
    role: '',
    linkedin: '',
    github: '',
    experience: '',
    techStack: [],
},
currentTech:''};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            const { name, value } = action.payload;
            state.formData[name] = value;
        },
        resetFormData: () => initialState,
        addTech: (state, action) => {
            state.formData.techStack.push(action.payload);
        },
        removeTech: (state, action) => {
            state.formData.techStack.splice(action.payload, 1);
        },
        UpdateCurrentTech: (state,action)=>{
            state.currentTech = action.payload
        }
    },
});

export const { updateFormData, resetFormData, addTech, removeTech, UpdateCurrentTech } = formSlice.actions;
export default formSlice.reducer;