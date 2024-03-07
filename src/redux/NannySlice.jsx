import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectFilterFavorite, selectFilters } from './FiltersSlice';
import { selectFavorites } from './FavoriteSlice';

export const nannySlice = createSlice({
  name: 'nanny',
  initialState: {
    nanniesData: [],
    isLoading: false,
  },
  reducers: {
    getLoading(state, action) {
      state.isLoading = true;
    },
    getNannies(state, action) {
      state.nanniesData = [...action.payload];
      state.isLoading = false;
    },
  },
});

export const selectNannies = state => state.nanny.nanniesData;
export const selectIsLoading = state => state.nanny.isLoading;
export const nannyReducer = nannySlice.reducer;
export const { getNannies, getLoading } = nannySlice.actions;

export const selectfilteredNannies = createSelector(
  [selectNannies, selectFilters],
  (nannies, filter) => {
    if (filter === 'A to Z') {
      return [...nannies].sort((a, b) => a.name.localeCompare(b.name)); //nannies's name in order
    } else if (filter === 'Z to A') {
      return [...nannies].sort((a, b) => b.name.localeCompare(a.name));
    } else if (filter === 'Less than 10$') {
      const filtered = [...nannies].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      if (filtered.some(item => item.price_per_hour <= 10)) {
        return filtered.filter(item => item.price_per_hour <= 10);
      } else {
        alert('Price "less than 10$"  was not found');
      }
      return filtered;
    } else if (filter === 'Greater than 10$') {
      return [...nannies].sort((a, b) => a.price_per_hour - b.price_per_hour);
    } else if (filter === 'Popular') {
      return [...nannies].sort((a, b) => b.rating - a.rating);
    } else if (filter === 'Not popular') {
      return [...nannies].sort((a, b) => a.rating - b.rating);
    } else if (filter === 'Show all') {
      return [...nannies];
    }
  }
);

export const selectfilteredNanniesFavorite = createSelector(
  [selectFavorites, selectFilterFavorite],
  (favorites, filter) => {
    if (filter === 'A to Z') {
      return [...favorites].sort((a, b) => a.name.localeCompare(b.name)); //nannies's name in order
    } else if (filter === 'Z to A') {
      return [...favorites].sort((a, b) => b.name.localeCompare(a.name));
    } else if (filter === 'Less than 10$') {
      const filtered = [...favorites].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      if (filtered.some(item => item.price_per_hour <= 10)) {
        return filtered.filter(item => item.price_per_hour <= 10);
      } else {
        alert('Price "less than 10$"  was not found');
      }
      return filtered;
    } else if (filter === 'Greater than 10$') {
      return [...favorites].sort((a, b) => a.price_per_hour - b.price_per_hour);
    } else if (filter === 'Popular') {
      return [...favorites].sort((a, b) => b.rating - a.rating);
    } else if (filter === 'Not popular') {
      return [...favorites].sort((a, b) => a.rating - b.rating);
    } else if (filter === 'Show all') {
      return [...favorites];
    }
  }
);
