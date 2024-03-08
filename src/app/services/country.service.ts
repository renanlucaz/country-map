import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Country {
    cca3: string
    name: {
        common: string
    }
}

type CountryResponse = Country[]

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    endpoints: (builder) => ({
        getCountryListByName: builder.query<CountryResponse, string>({
        query: (countryName) => ({
            url: `/name/${countryName}`,
            method: 'GET'
        }),
        }),
    }),
})

export const { useGetCountryListByNameQuery } = countryApi