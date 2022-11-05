import React from 'react'
import { Button } from '@mui/material'

export const NextButton = () => {
  return (
    <Button
        variant="contained"
        sx = {{
            boxShadow: 8,
            borderRadius: 19,
            p: 1,
            minWidth: 300,
            maxWidth: 300,
            margin: 1,
            whiteSpace: 'normal',
        }}
        color="secondary"
        onClick={() => {
        alert("NEXT");
        }}
  >
    Next
  </Button>
  )
}
