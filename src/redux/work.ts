import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WorkSlice {
  navState: string;
}

const initialState = { navState: "intro" } as WorkSlice;

export const workSlice = createSlice({
  name: "workNavigator",
  initialState,
  reducers: {
    changeWork: (state, action: PayloadAction<string>) => {
      state.navState = action.payload;
    },
  },
});

export const { changeWork } = workSlice.actions;
export default workSlice.reducer;
