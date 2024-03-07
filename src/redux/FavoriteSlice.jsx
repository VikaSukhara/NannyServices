import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteData: [ ],
  },
  reducers: {
    addFavourites(state, { payload }) {
      state.favoriteData = [...state.favoriteData, payload];
      console.log(state.favoriteData, 'state.favoriteData');
    },


    deleteFavourites(state, { payload }) {
      state.favoriteData = state.favoriteData.filter(item => item.id !== payload);
    },
  },
});


export const selectFavorites = state => state.favorite.favoriteData;
export const favoriteReducer = favoriteSlice.reducer;
export const { deleteFavourites, addFavourites } = favoriteSlice.actions;

