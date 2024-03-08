import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Search } from "@mui/icons-material";
import { Autocomplete, ButtonBase, InputAdornment, TextField } from "@mui/material";

import { SearchInput } from "./styles";
import { useGetCountryListByNameQuery } from "../../../../services/country.service";

export function SearchCountry() {
    const [searchValue, setSearchValue] = useState('');
    const { data } = useGetCountryListByNameQuery(searchValue, { skip: !searchValue })
    const dispatch = useDispatch()

    const countryOptions = data?.map(item => ({ id: item.cca3, label: item.name.common, ...item })) || []


    return (
        <Autocomplete 
            disablePortal
            id="combo-box-demo"
            options={countryOptions}
            onChange={(e, value) => console.log(value)}
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