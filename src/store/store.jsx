import { configureStore } from "@reduxjs/toolkit";
import adminAppSlice from "./admin/adminAppSlice.js";
import adminAuthSlice from "./admin/adminAuthSlice.js";

const journalStore = configureStore({
  reducer: {
    adminApp: adminAppSlice,
    adminAuth: adminAuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        warnAfter: 128,
      },
    }),
});

export default journalStore;

