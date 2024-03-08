import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    filtersNany: 'A to Z',
    filtersFavorite: 'Popular',
  },
  reducers: {
    filtersNanyAction(state, action) {
      state.filtersNany = action.payload;
    },
    filtersFavoriteAction(state, action) {
      state.filtersFavorite = action.payload;
    },
  },
});

export const selectFilters = state => state.filter.filtersNany;
export const selectFilterFavorite = state => state.filter.filtersFavorite;
export const filterReducer = filtersSlice.reducer;
export const { filtersNanyAction, filtersFavoriteAction } = filtersSlice.actions;