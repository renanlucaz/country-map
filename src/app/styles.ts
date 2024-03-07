import { Box, List, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)(() => ({
    height: '100vh',
    display: 'flex',
    flex: 1,

    '& path': {
        outline: 'none'
    }
}))

export const Aside = styled(Box)(() => ({
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

export const SearchInput = styled(TextField)(() => ({
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 10,
}))

export const Header = styled(Box)(() => ({
    position: 'absolute',
    width: '100%',
    height: '50px',
    backgroundColor: '#003249',
    zIndex:1 
}))