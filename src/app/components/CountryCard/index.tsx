import { useDispatch, useSelector } from "react-redux";
import { Box, ButtonBase, Switch, Typography } from "@mui/material";

import { CountryCardProps } from "./CountryCard.interface";
import { Container, Content, CountryInfo, CountryValue, SeeDetails } from "./styles";
import { CountryModal } from "../../features/country/components/CountryModal";
import { closeCountryModal, openCountryModal, selectCountry } from '../../features/country/countrySlice'
import { RootState } from "../../store";

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
    const countryModalOpen = useSelector((state: RootState) => state.country.countryModalOpen)
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(openCountryModal())
        dispatch(selectCountry({ 
            id,
            countryName, 
            capital, 
            currency, 
            language, 
            population, 
            active,
            flag,
            oficialName,
        }))
    }

    return (
        <>
            <Container>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h2">{countryName}</Typography>
                    <img src={flag} alt="Brasil" />
                </Box>
                <Box>
                    <ButtonBase disableRipple onClick={openModal}>
                        <SeeDetails fontSize="14px">Ver detalhes</SeeDetails>
                    </ButtonBase>
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
                <CountryModal open={countryModalOpen} onClose={() => dispatch(closeCountryModal())} />
            </Container>
        </>
    )
}