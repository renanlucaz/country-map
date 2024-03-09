import { type ThemeOptions, createTheme } from '@mui/material'
import { ptBR } from '@mui/material/locale'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#003249',
      contrastText: '#fff'
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: 'Archivo',
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
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          borderRadius: '8px',
          padding: '10px 40px',

          '& p': {
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'initial'
          },

          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    },
  }
}

export const theme = createTheme(themeOptions, ptBR)
