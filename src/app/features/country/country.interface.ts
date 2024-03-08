export interface Country {
    id: string;
    countryName: string;
    oficialName: string;
    capital: string;
    population: string;
    currency: string;
    language: string;
    active: boolean;
    flag: string;
}

export type ICountryList = Country[]