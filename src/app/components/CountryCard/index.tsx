import { Box, Switch, Typography } from "@mui/material";
import { CountryCardProps } from "./CountryCard.interface";
import { Container, Content, CountryInfo, CountryValue } from "./styles";

export function CountryCard(props: CountryCardProps): JSX.Element {
    const { 
        id,
        countryName, 
        capital, 
        currency, 
        language, 
        population, 
        active,
        flag,
        oficialName,
        toggleCheckCountry
    } = props;

    return (
        <Container>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h2">{countryName}</Typography>
                <img src={flag} alt="Brasil" />
            </Box>
            <Box>
                <Typography>{oficialName}</Typography>
            </Box>
            <Content>
                <Box display="flex">
                    <CountryInfo>Capital:</CountryInfo>
                    <CountryValue>{capital.map(item => `${item}`)}</CountryValue>
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
                    <CountryInfo>População:</CountryInfo>
                    <CountryValue>{Intl.NumberFormat('pt-BR').format(population)} habitantes.</CountryValue>
                </Box>
            </Content>
            <Box 
                display="flex" 
                alignItems="center" 
                justifyContent="space-between"
                padding={'7px 0'}
            >
                <Typography fontWeight={500}>Ativar visualização</Typography>
                <Switch
                    onClick={() => toggleCheckCountry(id)}
                    color="primary" 
                    checked={active} 
                />
            </Box>
        </Container>
    )
}