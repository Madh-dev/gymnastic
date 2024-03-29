import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Logo from '../assets/Logo-1.png'
const Footer = () => {
  return (
  <Box mt='Box' bgcolor='#fff3f4'>
    <Stack gap='40px' alignitems='center' px='40px' pt='24px'>
      <img src={Logo} alt='logo' width='200px' height='40px' />
    <Typography variant='h5' pb='40px' mt='20px' align='center'>
      Made with Love by <b>Madh Dev</b> 
    </Typography>
    </Stack>
  </Box>

  )
}

export default Footer