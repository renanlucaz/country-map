import { createSlice } from '@reduxjs/toolkit'
import { Country, ICountryList } from './country.interface'

export interface CountryState {
  countryList: ICountryList | [];
  selectedCountry: Country | null;
  countryModalOpen: boolean;
}

const initialState: CountryState = {
    countryList: [],
    selectedCountry: null,
    countryModalOpen: false
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
    addToCountryList: (state, action) => {
      state.countryList = [...state.countryList, action.payload]
    },
    removeFromCountryList: (state, action) => {
      console.log(action.payload)
      state.countryList = state.countryList.filter(country => country.id !== action.payload.id)
    },
    openCountryModal: (state) => {
      state.countryModalOpen = true
    },
    closeCountryModal: (state) => {
      state.countryModalOpen = false
    },
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload
    }
  },
})

export const { 
  toggleCheckCountry, 
  addToCountryList, 
  removeFromCountryList, 
  closeCountryModal, 
  openCountryModal,
  selectCountry
} = countrySlice.actions

export default countrySlice.reducer