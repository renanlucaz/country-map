import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)(() => ({
    height: '100vh',
    display: 'flex',
    flex: 1,

    '& path': {
        outline: 'none'
    }
}))
