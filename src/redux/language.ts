import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LangaugeState {
  languageState: string;
}

const initialState = { languageState: "en-US" } as LangaugeState;

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.languageState = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
