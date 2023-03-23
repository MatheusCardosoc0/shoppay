import { createSlice } from "@reduxjs/toolkit";

const initialState: any = "hello"

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
})

export default cartSlice.reducer;