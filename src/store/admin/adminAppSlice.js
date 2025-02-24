import { createSlice } from "@reduxjs/toolkit";

const adminAppSlice = createSlice({
  name: "app",
  initialState: {
    sidebarShow: true,
    theme: "light",
  },
  reducers: {
    setSidebarShow: (state, action) => {
      state.sidebarShow = action.payload;
    },
  },
});

export const { setSidebarShow } = adminAppSlice.actions;
export default adminAppSlice.reducer;
