import { createSlice } from "@reduxjs/toolkit";

const jsonSlice = createSlice({
  name: "jsonSlice",
  initialState: {
    users: [],
    user: null,
    posts: [],
    post: null,
    comments: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    getPost: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
    },
  },
});

const jsonReducer = jsonSlice.reducer;
export default jsonReducer;
export const { getUsers, getUser, getPosts, getPost } = jsonSlice.actions;
