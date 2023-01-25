import { configureStore } from '@reduxjs/toolkit';
import townReducer from './townSlice';

export default configureStore({
    reducer: {
        town: townReducer
    },
})