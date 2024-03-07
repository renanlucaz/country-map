import { type ThemeOptions, createTheme } from '@mui/material'
import { ptBR } from '@mui/material/locale'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#e9f6f8',
      contrastText: '#000'
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '36px',
      fontWeight: 'bold',
      marign: 0
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#454545'
    },
  },
}

export const theme = createTheme(themeOptions, ptBR)
