export interface Country {
    id: string;
    countryName: string;
    oficialName: string;
    capital: string[];
    population: number;
    currency: string;
    language: string;
    active: boolean;
    flag: string;
    mapLink: string;
}

export type ICountryList = Country[]