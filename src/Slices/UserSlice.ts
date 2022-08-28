import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { valueToPercent } from "@mui/base";

export interface IUser {
  value: IUserValue[];
  status: string;
  error: string | null;
}
export interface IUserValue {
  email: string;
  username: string;
  password: string;
  userID: string;
}
export interface IAddUser {
  email: string;
  username: string;
  password: string;
}
export interface ILogin {
  username: string;
  password: string;
}

const initialState: IUser = {
  value: [
    {
      email: "example@gmail.com",
      username: "admin",
      password: "admin",
      userID: nanoid(),
    },
  ],
  status: "ok",
  error: null,
};

export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IAddUser>) => {
      const { username, password, email } = action.payload;
      const userExistEmail = state.value.find((user) => user.email === email);
      if (userExistEmail) {
        state.error = "This email already exist!";
      }
      if (!userExistEmail) {
        state.value.push({
          email: email,
          username: username,
          password: password,
          userID: nanoid(),
        });
        state.error = null;
      }
    },

    deleteUser: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((el) => el.userID !== action.payload);
    },
    addError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state,) => {
      state.error = null;
    },
  },
});

export const { addUser, deleteUser, clearError, addError } = userSlice.actions;
export default userSlice.reducer;
