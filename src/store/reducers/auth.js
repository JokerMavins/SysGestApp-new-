import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../actions/auth";

// Get user from localStorage
const storedTokens = JSON.parse(localStorage.getItem("tokens"));

const token = storedTokens && storedTokens.token;
const refreshToken = storedTokens && storedTokens.refreshToken;
const user = storedTokens && storedTokens.user;


//State initial
const initialState = {
  user: user,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  accessToken: token,
  refreshToken: refreshToken,
};


export const loadTokens = createAsyncThunk(
  "tokens/load",
  async (_, { getState }) => {
    const storedTokens = JSON.parse(localStorage.getItem("tokens"));

    const token = storedTokens && storedTokens.token;
    const refreshToken = storedTokens && storedTokens.refreshToken;
    const user = storedTokens && storedTokens.user;

    // Mise à jour du state avec les tokens
    return {
      user,
      accessToken: token,
      refreshToken,
    };
  }
);

// Inscription de l'utilisateur
export const register = createAsyncThunk(
  "auth/register",
  async (users, thunkApi) => {
    try {
      let data = await authService.register(users);
      return data;
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

// Connexion de l'utilisateur
export const login = createAsyncThunk("auth/login", async (users, thunkApi) => {
  try {
    let data = await authService.login(users)
    return data;
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.toString();
    return thunkApi.rejectWithValue(message);
  }
});

// Deconnection de l'utlisateur
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logoutSession();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(loadTokens.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadTokens.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(loadTokens.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
      });
  },
});

export const { reset, setAccessToken, setRefreshToken, setValidToken } =
  authSlice.actions;
export default authSlice.reducer;
