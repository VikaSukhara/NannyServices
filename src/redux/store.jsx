import { configureStore } from '@reduxjs/toolkit';
import { nannyReducer } from './NannySlice';
import { favoriteReducer } from './FavoriteSlice';
import { filterReducer } from './FiltersSlice';
import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
// import persistStore from 'redux-persist/es/persistStore';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userReducer } from './UserSlice';

const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favoriteData'],
};

const persistReducerForFavorite = persistReducer(
  persistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    nanny: nannyReducer,
    favorite: persistReducerForFavorite,
    filter: filterReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
