import { styled } from '@mui/material/styles'
import { Box, Paper, Typography } from "@mui/material";

export const Container = styled(Paper)(() => ({
    padding: '10px 20px',
    marginTop: '10px',

    '& img': {
        width: '35px'
    }
}))

export const Content = styled(Box)(() => ({
    marginTop: 8,
    paddingBottom: 10,
    borderBottom: '1px solid #ccc'
}))

export const CountryInfo = styled(Typography)(() => ({
    fontWeight: 500,
    fontSize: 14
}))

export const CountryValue = styled(Typography)(() => ({
    color: '#8b8b8b',
    marginLeft: 5,
    fontSize: 14
}))

export const SeeDetails = styled(Typography)(() => ({
    fontSize: 14,
    fontWeight: 500,

    '&:hover': {
        textDecoration: 'underline',
    }
}))