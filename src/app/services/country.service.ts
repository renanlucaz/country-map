import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Country {
    cca3: string
    population: string
    capital: string[]
    currencies: any
    languages: any
    translations: {
        por: {
            official: string
            common: string
        }
    }
    flags: {
        svg: string
        png: string
    }
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
            url: `/translation/${countryName}`,
            method: 'GET'
        }),
        }),
    }),
})

export const { useGetCountryListByNameQuery } = countryApi