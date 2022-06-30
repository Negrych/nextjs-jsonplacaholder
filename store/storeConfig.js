import { configureStore } from "@reduxjs/toolkit";

import jsonReducer from "./jsonSlice";

const store = configureStore({
  reducer: {
    jsonData: jsonReducer,
  },
});

export default store;
