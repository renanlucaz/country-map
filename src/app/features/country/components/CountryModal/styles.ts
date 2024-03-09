import { Box, ButtonBase, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Paper)(() => ({
    maxWidth: '550px',
    width: '100%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'none',
}))

export const Header = styled(Box)(() => ({
    padding: '14px',
    borderBottom: '1px solid #ededed',

    '& img': {
        width: '35px'
    }
}))

export const CloseButton = styled(ButtonBase)(() => ({
    position: 'absolute',
    top: 15,
    right: 15
})) 

export const Content = styled(Box)(() => ({
    padding: '14px 20px'
}))

export const CountryInfo = styled(Typography)(() => ({
    fontWeight: 500,
    fontSize: 18
}))

export const CountryValue = styled(Typography)(() => ({
    color: '#8b8b8b',
    marginLeft: 5,
    fontSize: 17
}))

export const Footer = styled(Box)(() => ({
    borderTop: '1px solid #ededed',
    display: 'flex',
    padding: '14px 20px',
    justifyContent: 'space-between'
}))