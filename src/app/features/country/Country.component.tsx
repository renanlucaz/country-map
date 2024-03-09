import { useSelector, useDispatch } from 'react-redux'

import { CountryCard } from "../../components/CountryCard";
import { RootState } from "../../store";
import { Container, CountryList } from "./styles";
import { ICountryList } from './country.interface';
import { toggleCheckCountry } from './countrySlice';
import { SearchCountry } from './components/SearchCountry';

export function Country(): JSX.Element {
    const countryList: ICountryList = useSelector((state: RootState) => state.country.countryList)
    const dispatch = useDispatch()

    return (
        <Container>
            <SearchCountry />
                <CountryList>
                {countryList.map(country => (
                    <CountryCard 
                        key={country.countryName}
                        id={country.id}
                        capital={country.capital}
                        countryName={country.countryName}
                        oficialName={country.oficialName}
                        currency={country.currency}
                        language={country.language}
                        population={country.population}
                        active={country.active}
                        flag={country.flag}
                        mapLink={country.mapLink}
                        toggleCheckCountry={() => dispatch(toggleCheckCountry(country.id))}
                    />
                ))}
            </CountryList>
         </Container>
    )
}