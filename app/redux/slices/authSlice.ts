import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  currentUserEmail: string | null;
}

// Helper function to load tokens from AsyncStorage
// const loadTokensFromStorage = async (): Promise<AuthState> => {
//   try {
//     const accessToken = await AsyncStorage.getItem("accessToken");
//     const refreshToken = await AsyncStorage.getItem("refreshToken");
//     return {
//       accessToken: accessToken || null,
//       refreshToken: refreshToken || null,
//     };
//   } catch (error) {
//     console.error("Failed to load tokens from AsyncStorage:", error);
//     return {
//       accessToken: null,
//       refreshToken: null,
//     };
//   }
// };

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  currentUserEmail: null,
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string ; email?: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.currentUserEmail = action.payload.email || null; // Store email if available
      // Save tokens to AsyncStorage
      AsyncStorage.setItem("accessToken", action.payload.accessToken);
      AsyncStorage.setItem("refreshToken", action.payload.refreshToken);
      if (action.payload.email) {
        AsyncStorage.setItem("currentUserEmail", action.payload.email);
      }
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.currentUserEmail = null;
      // Clear tokens from AsyncStorage
      AsyncStorage.removeItem("accessToken");
      AsyncStorage.removeItem("refreshToken");
      AsyncStorage.removeItem("currentUserEmail");
    },
  },
});



export const { setAuthTokens, logout } = authSlice.actions;
export default authSlice.reducer;
