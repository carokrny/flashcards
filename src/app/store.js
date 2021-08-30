import { configureStore } from "@reduxjs/toolkit";

// import reducers from redux slices 
import topicsReducer from '../features/topics/topicsSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
