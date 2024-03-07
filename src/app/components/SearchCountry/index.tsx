import { ButtonBase, InputAdornment } from "@mui/material";
import { SearchInput } from "../../styles";
import { Search } from "@mui/icons-material";

export function SearchCountry() {
    return (
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
    )
}