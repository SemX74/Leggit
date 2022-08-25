import { configureStore } from '@reduxjs/toolkit'
import CommentsReducer from "../Slices/CommentSlice"
import PostReducer from "../Slices/PostSlice"


export const store = configureStore({

  reducer: {
    comments:CommentsReducer,
    posts: PostReducer
  },
  devTools:true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch