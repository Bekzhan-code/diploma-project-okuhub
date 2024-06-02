import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const LoadingPage = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CircularProgress />
  </Box>
  )
}

export default LoadingPage