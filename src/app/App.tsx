import { Box, ButtonBase, InputAdornment } from "@mui/material";
import { Aside, Container, CountryList, SearchInput } from "./styles";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { Search } from "@mui/icons-material";
import { CountryCard } from "./components/CountryCard";

function App() {
  return (
    <Container>
      <Aside>
        <SearchInput 
          fullWidth 
          variant="standard" 
          placeholder="Pesquise por um país"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <ButtonBase disableRipple>
                  <Search />
                </ButtonBase>
              </InputAdornment>
            ),
          }} 
        />
        <CountryList>
          <CountryCard 
            capital="Sumaré" 
            countryName="Brasil" 
            currency="BRL" 
            language="PT-BR" 
            population="64m" 
          />
          <CountryCard 
            capital="Sumaré" 
            countryName="Brasil" 
            currency="BRL" 
            language="PT-BR" 
            population="64m" 
          />
          <CountryCard 
            capital="Sumaré" 
            countryName="Brasil" 
            currency="BRL" 
            language="PT-BR" 
            population="64m" 
          />
          <CountryCard 
            capital="Sumaré" 
            countryName="Brasil" 
            currency="BRL" 
            language="PT-BR" 
            population="64m" 
          />
          <CountryCard 
            capital="Sumaré" 
            countryName="Brasil" 
            currency="BRL" 
            language="PT-BR" 
            population="64m" 
          />
          <CountryCard 
            capital="Sumaré" 
            countryName="Brasil" 
            currency="BRL" 
            language="PT-BR" 
            population="64m" 
          />
        </CountryList>
      </Aside>
      <Box flex="1">
        <ComposableMap height={600} width={1200}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography 
                  fill={geo.id === 'BRA' ? '#169dd3' : '#e9f6f8'} 
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
