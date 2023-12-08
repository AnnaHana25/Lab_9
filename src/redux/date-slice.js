import { createSlice } from "@reduxjs/toolkit"

const initialState = Date.now()

const currentDate = createSlice({
  name: "currentDate",
  initialState,
  reducers: {
    updateDate(state) {
      return (state = Date.now())
    },
  },
})

export const { updateDate } = currentDate.actions

export default currentDate.reducer
