import { createSlice } from '@reduxjs/toolkit'

export const gifSlice = createSlice({
  name: 'gif',
  initialState: {
    images: [],
    trending:[],

  },
  reducers: {
    storeImage: (state,action)=>{
      state.images = action.payload;
    },
    storeTrending: (state,action)=>{
      state.trending = action.payload;
    },


  },
})

// Action creators are generated for each case reducer function
export const { storeImage, storeTrending } = gifSlice.actions

export default gifSlice.reducer