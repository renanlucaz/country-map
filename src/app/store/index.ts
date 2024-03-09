import { configureStore } from '@reduxjs/toolkit'
import countryReducer from '../features/country/countrySlice'
import { countryApi } from '../services/country.service'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, countryReducer)

export const store = configureStore({
  reducer: {
    country: persistedReducer,

    [countryApi.reducerPath]: countryApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(countryApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
