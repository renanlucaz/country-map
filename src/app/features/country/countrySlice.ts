import { createSlice } from '@reduxjs/toolkit'
import { ICountryList } from './country.interface'

export interface CountryState {
  countryList: ICountryList | []
}

const initialState: CountryState = {
    countryList: [],
}

export const countrySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleCheckCountry: (state, action) => {
      state.countryList = state.countryList.map(country => {
        if(country.id === action.payload) {
          return { ...country, active: !country.active }
        }
  
        return country
      })
    },
    addToCountryList: (state) => {
      return state
    }
  },
})

export const { toggleCheckCountry } = countrySlice.actions

export default countrySlice.reducer