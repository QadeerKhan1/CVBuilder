import { Box, Typography } from '@mui/material'
import React from 'react'
import Skills from './skills/skillsPart'
import Certification from './certification/certification'
import Language from './language/language'

export default function RightSection1() {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column',gap:6}}>
        <Box>
        <Skills/>
        </Box>
        <Box>
            <Certification/>
        </Box>
        <Box>
          <Language/>
        </Box>
    </Box>
    </>
  )
}
