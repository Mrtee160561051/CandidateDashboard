import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import candidateReducer from './candidateSlice'; 
import modalReducer from './modalSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        candidates: candidateReducer,
        modal: modalReducer, 
    },
});

export default store;
