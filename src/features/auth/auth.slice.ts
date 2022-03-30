import { createSlice } from "@reduxjs/toolkit";

export interface IAuth {
  token: string;
  email: string;
  avatarUrl: string;
  loggedIn: boolean;
}

export const initialState = {
  token: "",
  email: "",
  avatarUrl: "",
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.email = action.payload.email;
      state.avatarUrl = action.payload.avatarUrl;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setLoggedIn,setUserData,setToken} = authSlice.actions;

//Creating Actions

export default authSlice;
