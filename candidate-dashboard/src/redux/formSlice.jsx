import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    role: '',
    linkedin: '',
    github: '',
    experience: '',
    techStack: [],
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        resetFormData: () => initialState,
        addTech: (state, action) => {
            state.techStack.push(action.payload);
        },
        removeTech: (state, action) => {
            state.techStack.splice(action.payload, 1);
        },
    },
});

export const { updateFormData, resetFormData, addTech, removeTech } = formSlice.actions;
export default formSlice.reducer;