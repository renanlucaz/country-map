import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CountryResponse } from './CountryService.interface';

interface Country {
    id: string;
    flag: string;
    population: number;
    countryName: string;
    currency: string[];
    language: string[];
    capital: string[];
    oficialName: string;
    mapLink: string;
}

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    endpoints: (builder) => ({
        getCountryListByName: builder.query<Country[], string>({
            query: (countryName) => ({
                url: `/translation/${countryName}`,
                method: 'GET'
            }),
            transformResponse: (response: CountryResponse) => {
                return response.map((country) => ({ 
                    id: country.cca3, 
                    flag: country.flags.svg,
                    population: country.population,
                    countryName: country.translations.por.common,
                    currency: country.currencies && [country.currencies]?.map(currency => {
                        const currencyCode = Object.keys(currency)[0];
              
                        return currency[currencyCode].name;
                    })?.join(', '),
                    language: country.languages && [country.languages]?.map(language => {
                        const languageCode = Object.keys(language)[0];
              
                        return language[languageCode];
                    })?.join(', '),
                    capital: country.capital,
                    active: true,
                    oficialName: country.name.official,
                    mapLink: country.maps.openStreetMaps
                }))
            }
        }),
    }),
})

export const { useGetCountryListByNameQuery } = countryApi