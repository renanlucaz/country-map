import { useState } from "react";
import {  Box, Button, Modal, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

import { CountryModalProps } from "./CountryModal.interface";
import { CloseButton, Container, Content, CountryInfo, CountryValue, Footer, Header } from "./styles";
import { ConfirmModal } from "../../../../components/ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCountryList } from "../../countrySlice";
import { RootState } from "../../../../store";

export function CountryModal(props: CountryModalProps): JSX.Element {
    const country = useSelector((state: RootState) => state.country.selectedCountry)
    const { onClose, open } = props;
    const dispatch = useDispatch()

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const closeConfirmModal = () => {
        setIsConfirmModalOpen(false)
    }

    const openConfirmModal = () => {
        setIsConfirmModalOpen(true)
    }

    const onConfirmRemoveCountry = () => {
        dispatch(removeFromCountryList(country))
        closeConfirmModal()
        onClose()
    }

    if(!country) return <></>

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Container>
                <Header>
                    <CloseButton disableRipple onClick={onClose}>
                        <Close />
                    </CloseButton>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img src={country.flag} alt={country.countryName} />
                        <Typography fontWeight={700} fontSize={25} ml="10px" color="#3c3c3c">{country.countryName}</Typography>
                    </Box>
                    <Typography fontSize={16} ml="10px" textAlign="center" color="#797979">{country.oficialName}</Typography>
                </Header>
                <Box>
                <iframe 
                    title={country.countryName}
                    width="100%" 
                    height="200" 
                    src="https://www.openstreetmap.org/export/embed.html?-10.0%2C-55.0%2C-4.306640625000001%2C22.024545601240337&amp;layer=mapnik" 
                    style={{ border: 'none' }}
                />
                </Box>
                <Content>
                    <Box display="flex">
                        <CountryInfo>Capital:</CountryInfo>
                        <CountryValue>{country.capital.map(item => `${item}`)}</CountryValue>
                    </Box>
                    <Box display="flex">
                        <CountryInfo>Moeda:</CountryInfo>
                        <CountryValue>{country.currency}</CountryValue>
                    </Box>
                    <Box display="flex">
                        <CountryInfo>População:</CountryInfo>
                        <CountryValue>{Intl.NumberFormat('pt-BR').format(country.population)} habitantes.</CountryValue>
                    </Box>
                    <Box display="flex">
                        <CountryInfo>Idioma:</CountryInfo>
                        <CountryValue>{country.language}</CountryValue>
                    </Box>
                </Content>
                <Footer>
                    <a href={country.mapLink} target="_blank" rel="noreferrer">
                        <Button variant="contained">
                            Ver no mapa
                        </Button>
                    </a>
                    <Button variant="contained" color="error" onClick={openConfirmModal} style={{ marginLeft: 10 }}>
                        Excluir
                    </Button>
                </Footer>
                <ConfirmModal 
                    closeModal={closeConfirmModal} 
                    onSubmit={onConfirmRemoveCountry} 
                    isOpen={isConfirmModalOpen} 
                />
            </Container>
        </Modal>
    )
}