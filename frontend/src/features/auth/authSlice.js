import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// create initial state

const initialState = {
  user: 'null',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Register new user
// user - comes from Form
// thunkAPI - has tools we can use
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    console.log(user);
  }
);

//Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log(user);
});

// Create Slice
// A function that accepts an initial state, an object of reducer functions, and a "slice name",
// and automatically generates action creators and action types that correspond to the reducers and state.
// This API is the standard approach for writing Redux logic.

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
