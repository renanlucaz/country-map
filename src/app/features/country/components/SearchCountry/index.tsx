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
    const { data } = useGetCountryListByNameQuery(searchValue, { skip: !searchValue })
    
    const countryList = useSelector(((state: RootState) => state.country.countryList))
    const dispatch = useDispatch()

    const countryOptions = data?.map(country => ({ label: country.countryName, id: country.id }))
        .filter(country => !countryList.map(item => item.id)
        .includes(country.id)) || []

    const addCountryToList = (countryId: string | undefined) => {
        if(countryId) {
            const country = data?.find(country => country.id === countryId)

            dispatch(addToCountryList(country))
        }

        setSearchValue('')
    }

    return (
        <Autocomplete 
            disablePortal
            id="combo-box-demo"
            options={countryOptions}
            onChange={(e, value) => addCountryToList(value?.id)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
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