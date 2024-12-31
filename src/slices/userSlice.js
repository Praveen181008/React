import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  names: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },

    setNames: (state, action) => {
      state.names = [...state.names, action.payload];
    },

    removeUser: (state, action) => {
      state.users = state.users.filter((_, index) => index !== action.payload);
    },

    removeName: (state, action) => {
      state.names = state.names.filter((_, index) => index !== action.payload);
    },
  },
});

export const { setUsers, setNames, removeUser, removeName } = userSlice.actions;

export default userSlice.reducer;
