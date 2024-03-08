import { Box } from "@mui/material";

import { Container } from "./styles";
import { Country } from "./features/country/Country.component";
import { CountryMaps } from "./components/CountryMaps";

function App() {
  return (
    <Container>
      <Country />
      <Box flex="1">
        <CountryMaps />
      </Box>
    </Container>
  );
}

export default App;
