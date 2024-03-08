import { Box, List } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)(() => ({
    backgroundColor: '#003249',
    display: 'flex',
    flexDirection: 'column',
    width: '370px',
    padding: 20,
    zIndex: 2
}))

export const CountryList = styled(List)(() => ({
    marginTop: 20,
    overflow: 'auto',
    maxHeight: '100%',
    paddingRight: 10,

    '&::-webkit-scrollbar': {
        width: 8,
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: '#ffffff40',
        borderRadius: 5
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#fff',
        borderRadius: 5
    },

    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#ffffff95',
        borderRadius: 5
    },
}))

