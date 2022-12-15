import { configureStore } from '@reduxjs/toolkit'
import diaryReducer from './diarySlice'
import { loadState } from "./browserStorage"

export default configureStore({
  reducer: {
    diary: diaryReducer,
  },
  preloadedState: loadState(),  
});