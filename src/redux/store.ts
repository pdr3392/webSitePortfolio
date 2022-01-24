import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language";
import workSlice from "./work";

export default configureStore({
  reducer: {
    language: languageReducer,
    work: workSlice,
  },
});
