import { createSlice } from "@reduxjs/toolkit";

const sideSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebar: true,
    response: "",
    context: "",
    svgs: [],
    pages: [],
    open: false,
    svgMessages: [],
    user: "",
  },
  reducers: {
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
    setContext: (state, action) => {
      state.context = action.payload;
    },
    setSvgs: (state, action) => {
      state.svgs = action.payload;
    },
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setSvgMessages: (state, action) => {
      state.svgMessages = action.payload;
    },
    clearSvgMessages: (state) => {
      state.svgMessages = [];
    },
    addUser: (state,action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = "";
    }
  },
});

export const {
  setSidebar,
  setContext,
  setSvgs,
  setPages,
  setResponse,
  setOpen,
  setSvgMessages,
  clearSvgMessages,
  addUser, clearUser
} = sideSlice.actions;
export default sideSlice.reducer;
