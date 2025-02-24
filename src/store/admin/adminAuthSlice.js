import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("adminToken"),
    adminToken: String(localStorage.getItem("adminToken") || ""),
    adminUser: JSON.parse(localStorage.getItem("adminUser") || "{}"),
    adminTokenExpiry: String(localStorage.getItem("adminTokenExpiry") || ""),
  },
  reducers: {
    login: (state, action) => {
      const { adminToken, adminUser } = action.payload;
      state.isAuthenticated = true;
      state.adminToken = adminToken;
      state.adminUser = adminUser;

      // Assuming the backend is handling token verification and expiration checks
      const decodedToken = JSON.parse(atob(adminToken?.split(".")[1])); // Decode the JWT payload to get expiry info (no verification)
      const adminExpiryTime = decodedToken?.exp * 1000; // Convert to milliseconds

      state.adminTokenExpiry = adminExpiryTime;

      localStorage.setItem("adminToken", adminToken);
      localStorage.setItem("adminUser", JSON.stringify(adminUser));
      localStorage.setItem("adminTokenExpiry", adminExpiryTime);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.adminToken = null;
      state.adminUser = null;
      state.adminTokenExpiry = null;
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");
      localStorage.removeItem("adminTokenExpiry");
    },
  },
  extraReducers: (builder) => {
    builder.addCase("auth/autoLogin", (state) => {
      if (state.adminToken && state.adminTokenExpiry) {
        const currentTime = new Date().getTime();

        // Check if the token has expired
        if (currentTime > state.adminTokenExpiry) {
          state.isAuthenticated = false;
          state.adminToken = null;
          state.adminUser = null;
          state.adminTokenExpiry = null;
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminUser");
          localStorage.removeItem("adminTokenExpiry");
        }
      }
    });
  },
});

export const { login, logout } = adminAuthSlice.actions;

export const selectCheckAuthentication = (state) =>
  state.adminAuth.isAuthenticated;
export const selectCurrentAdminUser = (state) => state.adminAuth.adminUser;
export const selectAdminToken = (state) => state.adminAuth.adminToken;

export default adminAuthSlice.reducer;
