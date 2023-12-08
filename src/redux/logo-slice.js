import { createSlice } from "@reduxjs/toolkit"

const initialState = "../logo192.png"

const imageUrl = createSlice({
  name: "imageUrl",
  initialState,
  reducers: {},
})

export default imageUrl.reducer
