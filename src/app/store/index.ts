import { configureStore } from '@reduxjs/toolkit'
import countryReducer from '../features/country/countrySlice'
import { countryApi } from '../services/country.service'

export const store = configureStore({
  reducer: {
    country: countryReducer,

    [countryApi.reducerPath]: countryApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(countryApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
