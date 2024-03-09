interface CountryAPI {
    cca3: string
    population: number
    capital: string[]
    currencies: any
    languages: any
    maps: {
        openStreetMaps: string
    }
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
        official: string
    }
}

export type CountryResponse = CountryAPI[]