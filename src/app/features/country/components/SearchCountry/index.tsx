import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../../store";
import { Search } from "@mui/icons-material";
import { Autocomplete, ButtonBase, InputAdornment } from "@mui/material";

import { SearchInput } from "./styles";
import { useGetCountryListByNameQuery } from "../../../../services/country.service";
import { addToCountryList } from "../../countrySlice";

export function SearchCountry() {
    const [searchValue, setSearchValue] = useState('');
    const countryList = useSelector(((state: RootState) => state.country.countryList))
    const { data } = useGetCountryListByNameQuery(searchValue, { skip: !searchValue })
    const dispatch = useDispatch()

    const countryOptions = data?.map(country => ({ 
        id: country.cca3, 
        label: country.translations.por.common, 
        flag: country.flags.svg,
        population: country.population,
        countryName: country.translations.por.common,
        currency: country.currencies && [country.currencies]?.map(currency => {
            const currencyCode = Object.keys(currency)[0];
  
            return currency[currencyCode].name;
        })?.join(', '),
        language: country.languages && [country.languages]?.map(language => {
            const languageCode = Object.keys(language)[0];
  
            return language[languageCode];
        })?.join(', '),
        capital: country.capital,
        active: true,
    })).filter(country => !countryList.map(item => item.id).includes(country.id)) || []

    const addCountryToList = (country: any) => {
        if(country) {
            dispatch(addToCountryList(country))
        }

        setSearchValue('')
    }

    return (
        <Autocomplete 
            disablePortal
            id="combo-box-demo"
            options={countryOptions}
            onChange={(e, value) => addCountryToList(value)}
            sx={{ 
                display: 'inline-block',
                '& input': {
                    width: 200,
                    bgcolor: 'background.paper',
                    color: (theme) =>
                      theme.palette.getContrastText(theme.palette.background.paper),
                  },
             }}
            renderInput={(params) => (
                <SearchInput 
                    {...params} 
                    fullWidth 
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    variant="standard" 
                    placeholder="Pesquise por um país"
                    InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <ButtonBase disableRipple>
                                    <Search />
                                </ButtonBase>
                            </InputAdornment>
                        ), 
                    }}
                /> 
            )}
        />
    )
}