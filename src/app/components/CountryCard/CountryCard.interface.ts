export interface CountryCardProps {
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
    toggleCheckCountry: (countryId: string) => void;
}