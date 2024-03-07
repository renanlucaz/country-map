import { Box } from "@mui/material";
import { Aside, Container, CountryList } from "./styles";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { CountryCard } from "./components/CountryCard";
import { CountryCardProps } from "./components/CountryCard/CountryCard.interface";
import { useState } from "react";
import { SearchCountry } from "./components/SearchCountry";

function App() {
  const [countryList, setCountryList] = useState<CountryCardProps[]>([
    {
      id: 'BRA',
      capital: 'Brasilia', 
      countryName: 'Brasil',
      oficialName: 'Repúplica Federativa do Brasil',
      currency: 'BRL',
      language: 'Pt-br',
      population: '160mi',
      active: true,
      flag: 'https://flagcdn.com/br.svg'
    },
    {
      id: 'CHN',
      capital: 'Washington DC', 
      countryName: 'China',
      oficialName: "People's Republic of China",
      currency: 'CNY',
      language: 'En-us',
      population: '1bi',
      active: true,
      flag: 'https://flagcdn.com/hk.svg'
    },
  ] as CountryCardProps[]);

  const toggleCheckCountry = (countryId: string) => {
    setCountryList((prevState) => prevState.map(country => {
      if(country.id === countryId) {
        return { ...country, active: !country.active }
      }

      return country
    }))
  }

  const getFillColor = (countryId: string): string => {
    const countryActive = countryList.find(country => country.id === countryId)

    if(countryActive && countryActive.active) return '#003249'

    return '#ceeff4'
  }

  return (
    <Container>
      <Aside>
        <SearchCountry />
        <CountryList>
          {countryList.map(country => (
            <CountryCard 
              id={country.id}
              capital={country.capital}
              countryName={country.countryName}
              oficialName={country.oficialName}
              currency={country.currency}
              language={country.language}
              population={country.population}
              active={country.active}
              flag={country.flag}
              toggleCheckCountry={toggleCheckCountry}
            />
          ))}
        </CountryList>
      </Aside>
      <Box flex="1">
        <ComposableMap height={800} width={800}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography 
                  fill={getFillColor(geo.id)} 
                  strokeWidth={0.8}
                  stroke="#fff"
                  key={geo.rsmKey} 
                  geography={geo} 
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </Box>
    </Container>
  );
}

export default App;
