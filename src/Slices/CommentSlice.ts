import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Action } from "history";

export interface IComment {
  value: ICommentValue[];
  status: string;
}
export interface ICommentValue {
  title: string;
  id: string;
  inx: number;
  visible: boolean;
  isAdding: boolean;
}

const initialState: IComment = {
  value: [
    {
      title: "First Post",
      id: nanoid(),
      inx: 0,
      visible: true,
      isAdding: false,
    },
    {
      title: "Second Post",
      id: nanoid(),
      inx: 1,
      visible: true,
      isAdding: false,
    },
    {
      title: "Third Post",
      id: nanoid(),
      inx: 2,
      visible: true,
      isAdding: false,
    },
    {
      title: "Fourth Post",
      id: nanoid(),
      inx: 3,
      visible: true,
      isAdding: false,
    },
    {
      title: "Fivth  Post",
      id: nanoid(),
      inx: 1,
      visible: true,
      isAdding: false,
    },
  ],
  status: "ok",
};

export const counterSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<ICommentValue>) => {
      const { inx, title, id } = action.payload;
      let index: number = state.value.map((el) => el.id).indexOf(id);
      state.value.splice(index + 1, 0, {
        title: title,
        id: nanoid(),
        inx: inx + 1,
        visible: true,
        isAdding: false,
      });
    },
    addCommentMenu: (state, action: PayloadAction<string>) => {
      const commentAddMenu = state.value.find((el) => el.id === action.payload);
      if (commentAddMenu) {
        commentAddMenu.isAdding = !commentAddMenu.isAdding;
      }
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

export const { addComment, addCommentMenu, deleteComment } =
  counterSlice.actions;
export default counterSlice.reducer;
