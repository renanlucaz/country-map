import { Box, Typography } from "@mui/material";
import { CountryCardProps } from "./CountryCard.interface";
import { Container, Content, CountryInfo, CountryValue } from "./styles";

export function CountryCard(props: CountryCardProps): JSX.Element {
    const { countryName, capital, currency, language, population } = props;

    return (
        <Container>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h2">{countryName}</Typography>
                <img src="https://flagcdn.com/br.svg" alt="Brasil" />
            </Box>
            <Box>
                <Typography>República federativa do Brasil</Typography>
            </Box>
            <Content>
                <Box display="flex">
                    <CountryInfo>Capital:</CountryInfo>
                    <CountryValue>{capital}</CountryValue>
                </Box>
                <Box display="flex">
                    <CountryInfo>Moeda:</CountryInfo>
                    <CountryValue>{currency}</CountryValue>
                </Box>
                <Box display="flex">
                    <CountryInfo>Língua:</CountryInfo>
                    <CountryValue>{language}</CountryValue>
                </Box>
                <Box display="flex">
                    <CountryInfo>Língua:</CountryInfo>
                    <CountryValue>{population}</CountryValue>
                </Box>
            </Content>
        </Container>
    )
}