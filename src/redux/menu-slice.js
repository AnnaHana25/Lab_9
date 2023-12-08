import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { text: "MenuItem1", url: "http://localhost:3000" },
  { text: "MenuItem2", url: "http://localhost:3000" },
  { text: "MenuItem3", url: "http://localhost:3000" },
  { text: "MenuItem4", url: "http://localhost:3000" },
  { text: "MenuItem5", url: "" },
  { text: "MenuItem6", url: "" },
]

const imageUrl = createSlice({
  name: "menuItems",
  initialState,
  reducers: {},
})

export default imageUrl.reducer
