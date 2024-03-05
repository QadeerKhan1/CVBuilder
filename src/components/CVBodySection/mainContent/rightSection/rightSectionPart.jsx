import { Box, Typography } from '@mui/material'
import React from 'react'
import Skills from './skills/skillsPart'
import Certification from './certification/certification'
import Language from './language/language'
import Interest from './interest/interest'

export default function RightSection() {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column',gap:4}}>
        <Box>
        <Skills/>
        </Box>
        <Box>
            <Certification/>
        </Box>
        <Box>
          <Language/>
        </Box>
        <Box>
          <Interest/>
        </Box>
    </Box>
    </>
  )
}
