import { styled } from '@mui/material/styles';

interface CountryProps {
    isHoverOn: boolean
}

export const Country = styled('a')(({ isHoverOn }: CountryProps) => ({
    cursor: isHoverOn ? 'pointer' : 'initial'
}))